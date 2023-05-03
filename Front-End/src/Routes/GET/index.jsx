import { useState, useEffect } from 'react';

const Get = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* HOOK PARA ATUALIZAR O ESTADO DA APLICAÇÃO SEMPRE QUE O COMPONENTE FOR MONTADO OU ATUALIZADO. */
    useEffect(() => {
        /* MÉTODO QUE IRÁ REALIZAR A REQUISIÇÃO PARA A API. */
        fetch("http://localhost:3001/api/tarefas")
            .then(resp => resp.json())
            .then(datas => {
                setData(datas)
                setIsLoading(false)
            })
            .catch(err => {
                console.error("Erro ao fazer a requisição: ",err)
                setIsLoading(false)
            });
    }, []);

    /* CASO A CONSTANTE "DATA" ESTIVER VAZIO RETORNE "[]" */
    if (isLoading) {
        return [];
    }
  
    /* CASO O IF ACIMA NÃO FOR VERDADEIRO ELE VAI RETORNA "DATA" */
    return (
        data
    );
}

export default Get;