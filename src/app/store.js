import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from '../features/task/TaskInfo';

export default configureStore({
    reducer: {
        task: TaskReducer
    }
})