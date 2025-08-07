import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './SrcSlice'

export default configureStore({
  reducer: {
    redu : counterSlice
  },
})