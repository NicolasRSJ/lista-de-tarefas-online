import React, {useState, useEffect, useCallback} from 'react';
import "../CSS/ButtonTask.css"
import Delete from '../../../Routes/DELETE/indes';

const DeleteTask = (props) => {
    const idTask = props.task._id;
    const deleteNameTask = props.task.titulo;
    const [showPopup, setShowPopup] = useState(false);
    const [buttonClick, setButtonClick] = useState(false);
    
    // FUNÇÃO PARA ABRIR E FECHAR POP-UP
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    // FUNÇÃO PARA CAPTAR O CLIQUE DO BOTÃO "DELETAR"
    const handleClick = useCallback(() => {
        setButtonClick(true);
        setShowPopup(false);
    }, [setButtonClick, setShowPopup]);

    // REACT HOOK QUE SERÁ EXECUTADO ASSIM QUE A CONSTANTE "NEWTASK" FOR DECLARADA.
    useEffect(() => {
        try{
            if(buttonClick !== false){
                Delete(idTask);
            }
        } catch(err) {
            console.error("Ocorreu um error na tentativa de requsição: " + err.message);
        }
    }, [buttonClick, idTask])
    
    return(
        <>
            <button className='deletetask-button-popup' onClick={togglePopup}>Excluir Tarefa</button>
            {showPopup && (
               <div className='container-popup'>
                    <div className='popup'>
                        <div className='popup-header'>
                            <h1>Excluir Tarefa</h1>
                        </div>
                        <div className='deletetask-popup-section'>
                            <h2>Tem Certeza?</h2>
                            <p>Você está prestes a excluir esta tarefa: <span>{deleteNameTask}</span></p>
                        </div>
                        <div className='popup-footer'>
                            <button onClick={togglePopup}>Cancelar</button>
                            <button type='submit' onClick={handleClick}>Excluir</button>
                        </div>
                    </div>
               </div> 
            )}
        </>
    );
}

export default DeleteTask;