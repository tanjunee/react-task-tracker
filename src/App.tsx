import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddTask from './components/task/AddTask';
import { TaskObj, TaskRequest } from './components/task/TaskInterfaces';
import Tasks from './components/task/Tasks';
import { addTask, deleteTask, fetchTask, fetchTasks, updateTask } from './services/Task.service';

const App = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskObj[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Add Task
  const addTaskHandler = async (newTask: TaskRequest) => {
    const data = await addTask(newTask);
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTaskHandler = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task: TaskObj) => task.id != id));
  };

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const taskToToggle: TaskObj = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    };

    const data = await updateTask(id, updTask);
    setTasks(
      tasks.map((task: TaskObj) => (task.id === id ? { ...task, reminder: data.reminder } : task))
    );
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
                {showAddTask && <AddTask onAdd={addTaskHandler} />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTaskHandler} onToggle={toggleReminder} />
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
