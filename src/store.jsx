import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./Data"
import sepetData from "./SepetData"

export default configureStore({
    reducer:{
        productSlice:productSlice,
        sepetData:sepetData

    }
})