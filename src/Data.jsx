import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"


export const getAllProduct = createAsyncThunk('data', async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllProduct.fulfilled, (state,action)=>{
            state.products = action.payload;
        })
    }
})


export const { } = productSlice.actions
export default productSlice.reducer;
