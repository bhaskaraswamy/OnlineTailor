import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState ={
    products:[
        
    ],
}

const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
        Deleteproduct:(state,action)=>{
            const payload =action.payload
            var TotalProducts=state.products;
            var product=false;
            for(var i=0;i<TotalProducts.length;i++)
            {
                console.log(Object.keys(TotalProducts[i])[0],Object.keys(payload)[0])
                if(Object.keys(TotalProducts[i])[0] === Object.keys(payload)[0]){
                    TotalProducts.splice(i,1);
                    product=true
                    break;
                }
            }
            
            if(product)
            {
                toast.success("product removed from cart successfully");
            }
        },
        Addproducts:(state,action)=>{
            const payload =action.payload
            var product = false;
            var TotalProducts=state.products;
                for(var i=0;i<TotalProducts.length;i++)
                {
                    if(Object.keys(TotalProducts[i])[0] === Object.keys(payload)[0]){
                        product=true;
                        TotalProducts[i] = payload;
                    }
                }

                if(!product)
                {
                    state.products.push(payload);
                    switch(Object.keys(payload)[0]){
                        case "pantId":
                            toast.success("Pant added to cart successfully")
                            break;
                        case "shirtId":
                            toast.success("shirt added to cart successfully") 
                            break;
                        case "TailorId":
                            toast.success("Tailor added to cart successfully")
                            break;
                        case "Date":
                            toast.success("Date added to cart successfully") 
                            break;
                        default:
                            toast.success("Something went wrong!")           
                    }
                }else{
                    switch(Object.keys(payload)[0]){
                        case "pantId":
                            toast.success("Pant updated to cart successfully")
                            break;
                        case "shirtId":
                            toast.success("shirt updated to cart successfully") 
                            break;
                        case "TailorId":
                            toast.success("Tailor updated to cart successfully")
                            break;
                        case "Date":
                            toast.success("Date updated to cart successfully") 
                            break;       
                        default:
                            toast.success("Something went wrong!")      
                    }
                }
        }
    },
    
});


export const{Addproducts,Deleteproduct} = productSlice.actions
export default productSlice.reducer