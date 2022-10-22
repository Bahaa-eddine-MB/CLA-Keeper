import {configureStore} from '@reduxjs/toolkit'
import mySlice from './mySlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import ProjectSlice from './ProjectSlice'
import TaskSlice from './TaskSlice'

const persistConfig = {
  key: 'main-root',
  storage
}

const persistedReducer = persistReducer(persistConfig, mySlice)
const projectReducer = persistReducer(persistConfig, ProjectSlice)
const taskReducer = persistReducer(persistConfig,TaskSlice )

export const store = configureStore({
  reducer: {
    project: projectReducer,
    drawer: persistedReducer,
    task : taskReducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


const Persistor = persistStore(store)


export {Persistor}





