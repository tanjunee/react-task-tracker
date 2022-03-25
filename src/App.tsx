import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddTask, { TaskRequest } from './components/task/AddTask';
import Tasks from './components/task/Tasks';

export interface TaskModel {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const App = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    return res.json();
  };

  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    return res.json();
  };

  // Delete Task
  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });

    setTasks(tasks.filter((task: TaskModel) => task.id != id));
  };

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updTask)
    });

    const data = await res.json();
    setTasks(
      tasks.map((task: TaskModel) => (task.id === id ? { ...task, reminder: data.reminder } : task))
    );
  };

  // Add Task
  const addTask = async (newTask: TaskRequest) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTask)
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                ) : (
                  'No Tasks to Show'
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
