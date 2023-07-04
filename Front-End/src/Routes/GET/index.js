const Get = () => {
    return fetch("http://localhost:3001/api/tarefas")
      .then((resp) => resp.json())
      .catch((err) => {
        console.error("Erro ao fazer a requisição: ", err);
        return [];
      });
  };
  
  export default Get;