import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    products:[],
}

const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{

        Addproducts:(state,action)=>{
            const {type,id}=action.payload
            var product = false;
            var TotalProducts=state.products;
            if(type === "pant" || type==="shirt"){
                state.products.push({id:id,type:type});
            }
            else{
            for(var i=0;i<TotalProducts.length;i++)
            {
                if(TotalProducts[i].type === type  ){
                    product=true;
                    TotalProducts[i].id=id;
                }
            }
            if(!product)
            {
                state.products.push({id:id,type:type});
            }
            }
            // state.products.push({id:id,type:type});
        }
    },
    
});


export const{Addproducts} = productSlice.actions
export default productSlice.reducer