import React, {useEffect, useState} from 'react'
import TaskTable from './Components/TaskTable/TaskTable';
import MyContext from './Context';
import './App.css';
import Get from './Routes/GET';

function App() {

  const [dataContext, setDataContext] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      Get().then((datas) => setDataContext(datas));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MyContext.Provider value={{dataContext, setDataContext}} >
      <div className="AppContainer">
        <header>
          <h1 className='AppContainer-header-title'>To-Do List</h1>
        </header>
        <article>
          <h2 className='Appcontainer-article-description'>Sua lista de tarefas online, para nunca se perder em seus compromissos e afazeres.</h2>
        </article>
        <section>
          <TaskTable />
        </section>
        <footer>
          <span className="AppContainer-footer-span">2023 © To-Do List - Lista de Tarefas Online</span>
        </footer>
      </div>
    </MyContext.Provider>
  );
}

export default App;
