import { createSlice } from '@reduxjs/toolkit'

const initialState = { drawer: false, dark: false, filter: "all",projectId: 1 }

const mySlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawer: (state) => {
      state.drawer = !state.drawer
    },
    setDarkMode: (state) => {
      state.dark = !state.dark
    },
    setAll: (state) => {
      state.filter = "all"
    },
    setActive: (state) => {
      state.filter = "active"
    },
    setCompleted: (state) => {
      state.filter = "completed"
    },
    setDisplayProject: (state,action) => {
      state.projectId= action.payload
    },
  },
})



export const { setDrawer, setDarkMode, setAll, setActive, setCompleted,setDisplayProject } = mySlice.actions
export default mySlice.reducer