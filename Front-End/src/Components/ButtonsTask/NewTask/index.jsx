import React, {useState, useEffect, useCallback} from 'react';
import "./index.css"

const NewTask = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [newTask, setNewTask] = useState();
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState(false);
    
    // FUNÇÃO PARA ABRIR E FECHAR POP-UP
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    // FUNÇÕES DE CAPTAÇÃO DE ALTERAÇÕES FEITAS NOS INPUTS
    const handleNewTaskName = (event) => {
        setNewTaskName(event.target.value);
    }
    const handleNewTaskDescription = (event) => {
        setNewTaskDescription(event.target.value);
    };
    const handleNewTaskStatus = (event) => {
        setNewTaskStatus(event.target.value);
    }

    // FUNÇÃO PARA CRIAR UM ARRAY DE OBJETOS QUE SERÁ ENVIADO PARA API
    const handleNewTask = useCallback((event) => {
        event.preventDefault();
        const task = {
            nome: newTaskName,
            descricao: newTaskDescription,
            concluido: newTaskStatus
        };
        setNewTask(JSON.stringify(task));
        setNewTaskName('');
        setNewTaskDescription('');
        setNewTaskStatus(false);
        setShowPopup(false);
    }, [newTaskName, newTaskDescription, newTaskStatus]);

    // REACT HOOK QUE SERÁ EXECUTADO ASSIM QUE A CONSTANTE "NEWTASK" FOR DECLARADA.
    useEffect(() => {
        try{
            console.log(newTask)
            // INSERIR MÉTODO POST
        } catch(err) {
            console.error("Ocorreu um error na requsição: " + err.message);
        }
    }, [newTask])
    
    return(
        <>
            <button className='button-popup' onClick={togglePopup}>Nova Tarefa</button>
            {showPopup && (
               <div className='container-popup'>
                    <div className='popup'>
                        <div className='popup-header'>
                            <h1>Nova Tarefa</h1>
                        </div>
                        <div className='popup-section'>
                            <form>
                                <input type='text' id='nome' name='nome' placeholder='Nome' required onChange={handleNewTaskName}/>
                                <input type="text" id='descricao' name='descricao' placeholder='Breve Descrição' required  onChange={handleNewTaskDescription}/>
                                <select id="status" name='status' defaultValue={false} onChange={handleNewTaskStatus}>
                                    <option className='option-invisible' disabled value={false}>Status de Conclusão</option>
                                    <option value={false}>Pendente</option>
                                    <option value={true}>Concluída</option>
                                </select>
                            </form>
                        </div>
                        <div className='popup-footer'>
                            <button onClick={togglePopup}>Cancelar</button>
                            <button type='submit' onClick={(e) => handleNewTask(e)}>Criar</button>
                        </div>
                    </div>
               </div> 
            )}
        </>
    );
}

export default NewTask;