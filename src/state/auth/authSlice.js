import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const register = createAsyncThunk(
  "auth/register",
    async (credenial, {rejectWithValue}) => {
      try {
          const response = await axios.post('http://localhost:8080/api/users/register', credenial)
          if (response.data) {
            return  response.data
          }
      } catch (error) {
        const message = error.response.data.message
        console.log(error.response.data.message);
        return rejectWithValue(message);
      } 
    }
  )


export const login = createAsyncThunk(
  "auth/login",
  async (data, {rejectWithValue}) => {

    try {
      
      const response = await axios.post('http://localhost:8080/api/users/login', data);
      if (response.data) {
        localStorage.setItem('jwt', JSON.stringify(response.data.token));
      }

      console.log(response.data);
      return response.data
    } catch (error) {
      const message = error.response.data.message
      console.log(error.response.data.error);
      console.log(error.response.data.message);
      return rejectWithValue(message);
    }
  
  }
)



const initialState = {
    isLoading: false,
    isError: false,
    isRegisterSuccess: false,
    isLoginSuccess: false,
    message: ""
}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetData : (state) => {
          state.isLoading = false
          state.isLoginSuccess = false
          state.isError = false
          state.message = ''
          localStorage.removeItem('jwt')
        }
    },
    extraReducers : (builder) => {
        builder
      // rregister
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false
        state.isRegisterSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      // login
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isLoginSuccess = true,
        state.isLogout = false,
        console.log("jwt token",action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
    }
    
})




export const { resetData } = authSlice.actions
export default authSlice.reducer;
