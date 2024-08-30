import {createSlice} from "@reduxjs/toolkit"


export const sepetDataSlice = createSlice({
    name: "sepet",
    initialState: {
        sepetProducts: [],
        count: 0,
        totalPrice: 0
    },
    reducers:{
        addProduct: (state,action)=>{
            const eleman = {
                product: action.payload.product,
                count: action.payload.urunSiparisSayisi
            };
            state.sepetProducts.push(eleman);
            state.count = state.count + action.payload.urunSiparisSayisi;
            state.totalPrice = state.totalPrice + action.payload.product.price*action.payload.urunSiparisSayisi;

        },
        deleteProduct: (state,action)=>{
            for(let i=0; i<state.sepetProducts.length; i++){
                if(state.sepetProducts[i].product.id===action.payload.product.id){
                    state.sepetProducts[i].count = state.sepetProducts[i].count - 1;
                    state.totalPrice = state.totalPrice - action.payload.product.price;
                    state.count = state.count - 1;

                }
            }


            state.sepetProducts = state.sepetProducts.filter((product)=>product.count !==0);
            
        }
    }

})


export const { deleteProduct, addProduct } = sepetDataSlice.actions
export default sepetDataSlice.reducer;