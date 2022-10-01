import { createSlice } from '@reduxjs/toolkit'

export const DarkSlice = createSlice({
  name: 'value',
  initialState: {
    darkMode: true,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },


  },
})


export const { setDarkMode } = DarkSlice.actions
export const selectDark = (state) => state.darkMode

export default DarkSlice.reducer
