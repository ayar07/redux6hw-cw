import { createSlice } from "@reduxjs/toolkit";
import fetchBooks from "../../store/actions/bookCreator";

const initialState = {
    books: [],
    booksIsLoading: false,
    booksIsError: "",
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.booksIsLoading = true;
            state.booksIsError = "";
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.books = [];
                state.booksIsError = action.payload;
            state.booksIsLoading = false;
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.booksIsError = "";
            state.booksIsLoading = false;
        })
    }
})

const booksReducer = booksSlice.reducer;

export default booksReducer;