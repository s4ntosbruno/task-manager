import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Comprar chuchu',
      time: '5 de fev às 17pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Comprar mel',
      time: '6 de fev às 17pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Comprar batata',
      time: '7 de fev às 17pm',
      reminder: true
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Hello"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
