import { configureStore } from '@reduxjs/toolkit'
import { producteSlice } from './Slices/prodducteSlice'
import { usersSlice } from './Slices/usersSlice'

export const store = configureStore({
  reducer: {
    Producte:producteSlice.reducer,
    Users:usersSlice.reducer
  },
})