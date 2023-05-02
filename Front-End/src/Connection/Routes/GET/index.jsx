import { useState, useEffect } from 'react';

const Get = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /* MÉTODO PARA BUSCAR DOS DADOS NA API */
    useEffect(() => {
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