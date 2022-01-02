
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskAdd from './components/taskAdd/TaskAdd';
import TaskList from './components/tasklist/TaskList';


function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
   <TaskAdd/>
   <TaskList/>
    </div>
  );
}

export default App;
