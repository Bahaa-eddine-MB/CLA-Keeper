import axios from "axios";
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";

const projectsAdapter = createEntityAdapter();

const initialState = projectsAdapter.getInitialState({
    status: "idle",
})




export const addNewProject = createAsyncThunk("projects/addNewProject",
    async (project) => {
        console.log("yesesesesesesese");
        const response = await axios.post(
            "http://localhost:3500/Projects",
            project
        );
        return response.data;
    }
);

const projectSlice = createSlice({
    name: 'project',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewProject.fulfilled);
    },

})



export const { setProject } = projectSlice.actions
export default projectSlice.reducer