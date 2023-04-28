import './App.css';
import TaskTable from './Components/TaskTable/TaskTable';

function App() {
  return (
    <div className="AppContainer">
      <header>
        <h1 className='AppContainer-header-title'>To-Do List</h1>
      </header>
      <article>
        <h2 className='Appcontainer-article-description'>Sua lista de tarefas online, para nunca se perde em seus compromissos e afazeres.</h2>
      </article>
      <section>
        <TaskTable/>
      </section>
      <footer>
        <span className="AppContainer-footer-span">2023 © To-Do List - Lista de Tarefas Online</span>
      </footer>
    </div>
  );
}

export default App;
