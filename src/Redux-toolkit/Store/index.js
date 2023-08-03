import { configureStore } from '@reduxjs/toolkit'
import bookReducer from "../Slicers/BooksSlice";

const store = configureStore({
  reducer: {
    Books: bookReducer,
  },
})

export default store;
