import './App.css';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <div>
      <h1 className="text-6xl shadow-lg bg-orange-400 text-white text-center top-0 mb-10 w-full">Task Reminder</h1>
      <section>
        <TaskForm />
      </section>
    </div>
  );
}

export default App;
