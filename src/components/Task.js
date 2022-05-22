import {useState} from 'react';

const Task = ({task, handleSorting}) => {
    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);

    const handleDone = (e) => {
        const {checked} = e.target;
        if(checked) {
            setDone(true)
        } else {
            setDone(false)
        }
    }

    const handleImportant = (e) => {
        const {checked} = e.target;
        if(checked) {
            setImportant(true)
        } else {
            setImportant(false)
        }
    }

    
    return (
        <div className={`grid grid-cols-3 mt-10 border-2 border-black border-solid p-5 cursor-pointer rounded-lg ${done ? 'bg-red-500' : important ? 'bg-green-900' : 'bg-slate-500'}`}>
            <span className={`text-white uppercase ${done && 'line-through'}`}>{task}</span>
            <div>
                <label htmlFor="done">Done:</label>
                <input id="done" type="checkbox" name="done" onClick={handleDone}/>
            </div>
            <div>
                <label htmlFor="important">Important:</label>
                <input id="important" type="checkbox" name="important" disabled={done && true} onClick={handleImportant}/>
            </div>
        </div>
    )
}


export default Task