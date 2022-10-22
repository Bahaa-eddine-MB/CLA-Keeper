import axios from "axios";
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState({
    status: "idle",
    tasks: [],
});



export const addNewTask = createAsyncThunk("tasks/addNewTask", async (task) => {
    const response = await axios.post("http://localhost:3500/Tasks", task);
    let current = await axios.get(
        "http://localhost:3500/Projects/" + task.projectId
    );
    current = current.data;
    current.trackedTime = (parseInt(current.trackedTime) + parseInt(task.duration));
    await axios.put("http://localhost:3500/Projects/" + task.projectId, current);
    return response.data;
});



export const removeTask = createAsyncThunk(
    "tasks/removeTask",
    async (task) => {
        console.log("time is " + task.time);
        console.log("id is " + task.projectId);
        await axios.delete("http://localhost:3500/Tasks/" + task.id);
        let current = await axios.get(
            "http://localhost:3500/Projects/" + task.projectId
        );
        console.log(current);
        current = current.data;
        current.trackedTime = (parseInt(current.trackedTime) - parseInt(task.time));
        await axios.put("http://localhost:3500/Projects/" + task.projectId, current);
    }
);

export const markComplete = createAsyncThunk(
    "tasks/markComplete",
    async (id) => {
        let current = await axios.get("http://localhost:3500/Tasks/" + id);
        current = current.data;
        current.completed = true;
        current.isRunning = false;
        current.remainingTime = 0;
        current.remainingSeconds = 0;
        await axios.put("http://localhost:3500/Tasks/" + id, current);
    }
);

export const markUnComplete = createAsyncThunk(
    "tasks/markComplete",
    async (task) => {
        let current = await axios.get("http://localhost:3500/Tasks/" + task.id);
        current = current.data;
        current.completed = false;
        current.isRunning = true;
        current.remainingTime = task.duration;
        current.remainingSeconds = task.duration*60;
        await axios.put("http://localhost:3500/Tasks/" + task.id, current);
    }
);



export const updateTime = createAsyncThunk("tasks/markComplete", async (id) => {
    let current = await axios.get("http://localhost:3500/tasks/" + id);
    current = current.data;
    current.remainingTime = current.remainingTime - 1;
    await axios.put("http://localhost:3500/tasks/" + id, current);
});

export const startTimer = createAsyncThunk("tasks/markComplete", async (task) => {
    let current = await axios.get("http://localhost:3500/tasks/" + task.id);
    current = current.data;
    current.isRunning = true
    current.remainingTime = task.temp /60;
    current.remainingSeconds = task.temp
    await axios.put("http://localhost:3500/tasks/" + task.id, current);
});

export const pauseTimer = createAsyncThunk("tasks/markComplete", async (task) => {
    let current = await axios.get("http://localhost:3500/tasks/" + task.id);
    current = current.data;
    current.isRunning = false
    current.remainingTime = task.temp /60;
    current.remainingSeconds = task.temp
    await axios.put("http://localhost:3500/tasks/" + task.id, current);
});

const tasksSlice = createSlice({
    name: "task",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewTask.fulfilled, tasksAdapter.addOne)
            .addCase(removeTask.fulfilled, tasksAdapter.removeOne);
    },
});

export default tasksSlice.reducer;
