import React, { useState } from 'react';
import '../../App.css';

function TaskTable() {
    const [tasks, setTasks] = useState([
        { name: 'Tarefa 1', description: 'Descrição da Tarefa 1', completed: false },
        { name: 'Tarefa 2', description: 'Descrição da Tarefa 2', completed: true },
        { name: 'Tarefa 3', description: 'Descrição da Tarefa 3', completed: false },
    ]);

    return(
        <div>
        </div>
    );
}

export default TaskTable;
