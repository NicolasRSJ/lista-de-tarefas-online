import React, {useState, useEffect, useCallback} from 'react';
import "../CSS/ButtonTask.css"

const EditTask = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [editTask, setEditTask] = useState();
    const [idTask, setIdTask] = useState(props.task._id);
    const [editTaskName, setEditTaskName] = useState(props.task.titulo);
    const [editTaskDescription, setEditTaskDescription] = useState(props.task.descricao);
    const [editTaskStatus, setEditTaskStatus] = useState(props.task.concluido);
    
    // FUNÇÃO PARA ABRIR E FECHAR POP-UP
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    // FUNÇÕES DE CAPTAÇÃO DE ALTERAÇÕES FEITAS NOS INPUTS
    const handleEditTaskName = (event) => {
        setEditTaskName(event.target.value);
    }
    const handleEditTaskDescription = (event) => {
        setEditTaskDescription(event.target.value);
    };
    const handleEditTaskStatus = (event) => {
        setEditTaskStatus(event.target.value);
    }

    // FUNÇÃO PARA CRIAR UM ARRAY DE OBJETOS QUE SERÁ ENVIADO PARA API
    const handleEditTask = useCallback((event) => {
        event.preventDefault();
        const task = {
            titulo: editTaskName,
            descricao: editTaskDescription,
            concluida: editTaskStatus
        };
        setEditTask(JSON.stringify(task));
        setShowPopup(false);
    }, [editTaskName, editTaskDescription, editTaskStatus]);

    // REACT HOOK QUE SERÁ EXECUTADO ASSIM QUE A CONSTANTE "editTASK" FOR DECLARADA.
    useEffect(() => {
        try{
            
            // INSERIR MÉTODO PUT
        } catch(err) {
            console.error("Ocorreu um error na requsição: " + err.message);
        }
    }, [editTask])
    
    return(
        <>
            <button className='edittask-button-popup' onClick={togglePopup}>Editar Tarefa</button>
            {showPopup && (
               <div className='container-popup'>
                    <div className='popup'>
                        <div className='popup-header'>
                            <h1>Editar Tarefa</h1>
                        </div>
                        <div className='popup-section'>
                            <form>
                                <input type='text' id='nome' name='nome' placeholder={editTaskName} required onChange={handleEditTaskName}/>
                                <input type="text" id='descricao' name='descricao' placeholder={editTaskDescription} required  onChange={handleEditTaskDescription}/>
                                <select id="status" name='status' defaultValue={editTaskStatus} onChange={handleEditTaskStatus}>
                                    <option value={false}>Pendente</option>
                                    <option value={true}>Concluída</option>
                                </select>
                            </form>
                        </div>
                        <div className='popup-footer'>
                            <button onClick={togglePopup}>Cancelar</button>
                            <button type='submit' onClick={(e) => handleEditTask(e)}>Alterar</button>
                        </div>
                    </div>
               </div> 
            )}
        </>
    );
}

export default EditTask;