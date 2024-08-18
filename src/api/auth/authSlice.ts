import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: Boolean(localStorage.getItem('isAuth')) || false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true
      localStorage.setItem("isAuth", `true`);
    },
    logout: (state) => {
      state.isAuth = false
      localStorage.setItem("isAuth", `false`);
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer