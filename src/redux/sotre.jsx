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


const persistConfig = {
  key: 'main-root',
  storage
}

const persistedReducer = persistReducer(persistConfig, mySlice)


export const store = configureStore({
  reducer: {
    drawer: persistedReducer
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





