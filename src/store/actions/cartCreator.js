import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const fetchAllCart = createAsyncThunk(
  "cart/fetchAll",
  async (payload, thankApi) => {
    try {
      const response = await api.getCartItems();
      return response.data;
    } catch (err) {
      return thankApi.rejectWithValue("Что то прошло не так");
    }
  }
);

export default fetchAllCart;