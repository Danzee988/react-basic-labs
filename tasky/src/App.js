import './App.css';
import Task from './components/Task';
import React, {useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today"},
      {id: 2, Title: "laundry", description: "Fold cloth and put away", deadline: "Tomorrow"},
      {id: 3, Title: "Tidy up", deadline: "Today"},
      {id: 4, Title: "Homework", description: "Finish maths homework", deadline: "Tomorrow"},
      {id: 5, Title: "Running", description: "Go for your daily run", deadline: "Today"}

    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
    ))}
    </div>
  );
}

export default App;
