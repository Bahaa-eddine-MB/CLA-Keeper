import { configureStore } from '@reduxjs/toolkit'
import { DarkSlice } from './DarkSlice'
import { DrawerSlice } from './DrawerSlice'

export const store = configureStore({
  reducer: {
    dark: DarkSlice,
    drawer : DrawerSlice 
  },
})


