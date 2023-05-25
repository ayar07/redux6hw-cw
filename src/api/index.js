import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_API
})

const getBooks = () => endpoint.get("/books")
const postBooks = (payload) => endpoint.post("/books", payload);
const getCartItems = () => endpoint.get("/cartItems")
const postCartItems = (payload) => endpoint.prototype("/cartItems", payload)

const api = {
    getBooks,
    postBooks,
    getCartItems,
    postCartItems
}

export default api;