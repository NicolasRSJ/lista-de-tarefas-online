const Put = (idTask, dataTask) => {

    /* CRIA UMA CONSTANTE COM AS CONFIGURAÇÕES QUE O MÉTODO "FETCH" VAI UTILIZAR. */
    const request = new Request(`http://localhost:3001/api/tarefas/${idTask}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTask) // CONVERTE O OBJETO JAVASCRIPT PARA UMA STRING JSON.
    });

    /* MÉTODO QUE IRÁ REALIZAR A REQUISIÇÃO PARA A API. */
    fetch(request)
        .then(resp => resp.json())
        .then(respData => console.log("Tarefa Atualizada: " + respData.titulo))
        .catch(err => console.error(err))

}

export default Put;