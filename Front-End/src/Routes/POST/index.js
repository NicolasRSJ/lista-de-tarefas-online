const Post = (dataTask) => {
    
    /* CRIA UMA CONSTANTE COM AS CONFIGURAÇÕES QUE O MÉTODO "FETCH" VAI UTILIZAR. */
    const request = new Request('http://localhost:3001/api/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTask) // CONVERTE O OBJETO JAVASCRIPT PARA UMA STRING JSON.
    });

    /* MÉTODO QUE IRÁ REALIZAR A REQUISIÇÃO PARA A API. */
    fetch(request)
        .then(resp => resp.json())
        .then(respData => {
            console.log('Dados Recebidos: ', respData)
        })
        .catch(err => console.error('Erro ao fazer a requisição: ', err))

    return;
}

export default Post;