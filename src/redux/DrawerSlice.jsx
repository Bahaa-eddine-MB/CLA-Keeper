import { createSlice } from '@reduxjs/toolkit'


export const DrawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    value: false,
  },
  reducers: {
    setShowDrawer: (state) => {
      state.value = !state.value
    },

  },
})

export const { setShowDrawer } = DrawerSlice.actions
export const selectDrawer = (state) => state.value

export default DrawerSlice.reducer
