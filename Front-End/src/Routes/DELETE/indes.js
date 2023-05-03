const Delete = (idTask) => {

    console.log(idTask);

    const request = new Request( `http://localhost:3001/api/tarefas/${idTask}` , {
        method: "DELETE"
    });

    fetch(request)
        .then(resp => resp.json())
        .then(dataResp => console.log("Tarefa Deletada: ", dataResp))
        .catch(err => console.log("Ocorreu um erro na requisição: ", err.message))

}

export default Delete;