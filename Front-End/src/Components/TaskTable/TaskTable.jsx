import React from 'react';
import EditTask from '../ButtonsTask/EditTask/EditTask';
import NewTask from '../ButtonsTask/NewTask/NewTask';
import DeleteTask from '../ButtonsTask/DeleteTask/DeleteTask';
import './TaskTable.css';
import Get from '../../Routes/GET';

function TaskTable() {
    const tasks = Get();
    
    return(
        <div className='crud'>
            <div className='crud-newtask'>
                <NewTask/>
            </div>
            <table className='crud-table'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => (
                            <tr key={index} id='bodyrow'>
                                <td>{task.titulo}</td>
                                <td>{task.descricao}</td>
                                <td>{task.concluido ? 'Completa' : 'Pendente'}</td>
                                <td id='tabledata'>
                                    <EditTask task={task} />
                                    <DeleteTask task={task} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;
