import {useState} from 'react';
import Task from './Task';
import TaskList from './TaskList';

const TaskForm = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    

    const handleValue = (e) => {
        const {value} = e.target;
        setValue(value)
    }

    const handleSorting = (important, index) => {
        if(important) {
            setList([list[index], list[index + 1]] = [list[index + 1], list[index]])
        }
    }

    
    const handleSubmitTask = (e) => {
        e.preventDefault();

        if(value === '' || !isNaN(value)) {
            return;
        }

        setList([...list, <Task task={value} handleSorting={handleSorting}/>]);
        setValue('')
    } 
    return (
        <>
        <div className="border-2 border-solid border-black p-5 w-72 m-auto h-72 flex-col text-center rounded-xl">
            <form onSubmit={handleSubmitTask}>
                <label htmlFor="task">Enter a Task:</label>
                <input className="w-60 p-3 rounded-xl border-solid border-black border-1" id="task" value={value} onChange={handleValue}/>
                <button className="bg-orange-300 p-3 rounded-full mt-3 text-white">Submit Task</button>
                <div id="time" className="mt-3 flex flex-col">
                <label htmlFor='time'>Set a Time:</label>
                    <select value="0" className="text-center w-12 m-auto">
                        <option>1</option>
                    </select>
                    <select value="0" className="text-center w-12 m-auto">
                        <option>1</option>
                    </select>
                    <select className="text-center w-12 m-auto">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
            </form>
        </div>
        <section>
            <TaskList list={list} />
        </section>
        </>
    )
}


export default TaskForm