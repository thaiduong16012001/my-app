import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {User} from '../../../database/User'
import {setStorage,getStorage} from'../../../util/localStore'



type InitialState = {
    User: User
    isLogin: boolean
}

const initialState: InitialState = {
    User: getStorage('User')?? {},
    isLogin:getStorage('IsLogin')?? false
}





const LoginSlice = createSlice({
    initialState: initialState,
    name: 'LoginData',
    reducers: {
        singIn: (state, action: PayloadAction<User>) => {
            state.isLogin = true;
            state.User = action.payload
            setStorage("User", action.payload);
            setStorage("IsLogin", true)
        },
        singOut: (state) => {
            state.isLogin = false;
            state.User = {}
            setStorage("User", {});
            setStorage("IsLogin", false)
        }
        
    },
   
})

export const {singIn,singOut } = LoginSlice.actions
export default LoginSlice.reducer