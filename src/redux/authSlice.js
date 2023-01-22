import {createSlice,createAsyncThunk, isAnyOf} from '@reduxjs/toolkit'




import agents from '../api/agent'



const initialState={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}

export const signUpUser= createAsyncThunk('signupuser', async(body,thunkAPI)=>{
    try{
      const res= await agents.Authentication.register(body)
      return res;
    }
    catch(error){
        return thunkAPI.rejectWithValue({error:error.data})
    }
})

export const signInUser=createAsyncThunk('signinuser',async(body,thunkAPI)=>{
    try{
        const res=await agents.Authentication.login(body);
        console.log(res.token);
        localStorage.setItem("user",res.token);
        localStorage.setItem("userId",res.id);
        return res;
    }
    catch(error){
        return thunkAPI.rejectWithValue({error:error.data});
    }
})

const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        
        logout :(state)=>{
            state.user=null;
            localStorage.removeItem("user");
            window.location = "/"
        },

        
    },
    extraReducers:(builder)=>{
        builder.addMatcher(isAnyOf(signUpUser.fulfilled,signInUser.fulfilled),(state,action)=>{
            state.user=action.payload
        });
        builder.addMatcher(isAnyOf(signUpUser.rejected,signInUser.rejected),(state,action)=>{
            console.log(action.payload);
        });
        
    }
})

export const{logout}=authSlice.actions;
export default authSlice.reducer;



