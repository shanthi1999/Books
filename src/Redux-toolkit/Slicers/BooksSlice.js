import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    pageNumber: 0,
    totalPages: 0
};

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        getBooks: (state, action) => {
            state = {
                ...state,
                books: [...state.books, ...action.payload.books],
                pageNumber: action.payload.page,
                totalPages: action.payload.totalPages
            };
            return state;
        },
    },
});

export const { getBooks } = bookSlice.actions;
export default bookSlice.reducer;