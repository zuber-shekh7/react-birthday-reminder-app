import { USER_SIGNIN, IS_AUTHENTICATED } from "../types/auth";
import  authAPI from "../apis/authAPI";
import  FormData from "form-data";


export const userSignIn = (email, password) => {
    return async (dispatch) => {
        const data = new FormData();
        data.append("email", email)
        data.append("password", password)
        try {
            const response = await authAPI.post('token/',data);
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            dispatch({type: USER_SIGNIN, payload:response.data})
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

export const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken')
    return {
        type:IS_AUTHENTICATED,
        payload: {isAuthenticated: token?true:false}
    }
}