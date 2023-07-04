const Delete = (idTask) => {

    /* CRIA UMA CONSTANTE COM AS CONFIGURAÇÕES QUE O MÉTODO "FETCH" VAI UTILIZAR. */
    const request = new Request( `http://localhost:3001/api/tarefas/${idTask}` , {
        method: "DELETE"
    });

    /* MÉTODO QUE IRÁ REALIZAR A REQUISIÇÃO PARA A API. */
    fetch(request)
        .then(resp => resp.json())
        .then(dataResp => console.log("Tarefa Deletada: ", dataResp))
        .catch(err => console.log("Ocorreu um erro na requisição: ", err.message))

}

export default Delete;