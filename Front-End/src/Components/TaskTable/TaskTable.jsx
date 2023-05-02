import React, { useState } from 'react';
import EditTask from '../ButtonsTask/EditTask/EditTask';
import NewTask from '../ButtonsTask/NewTask/NewTask';
import DeleteTask from '../ButtonsTask/DeleteTask/DeleteTask';
import './TaskTable.css';

function TaskTable() {
    const [tasks, setTasks] = useState([
        { _id: 1, titulo: 'Tarefa 1', descricao: 'Descrição da Tarefa 1', concluido: false },
        { _id: 2, titulo: 'Tarefa 2', descricao: 'Descrição da Tarefa 2', concluido: true },
        { _id: 3, titulo: 'Tarefa 3', descricao: 'Descrição da Tarefa 3', concluido: false },
    ]);

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
