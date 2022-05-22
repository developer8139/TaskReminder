
const TaskList = ({list}) => {
    return (
        <ul>
            {list.map(task => task)}
        </ul>
    )
}


export default TaskList