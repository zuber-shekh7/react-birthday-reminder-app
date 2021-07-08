import { USER_SIGNIN, IS_AUTHENTICATED } from "../types/auth";

const initialState = {}
const authReducer = (state=initialState, action) => {
    switch(action.type){
        case USER_SIGNIN:
            return {...action.payload, state};
        case IS_AUTHENTICATED:
            return {...action.payload, state}
        default:
            return state;
    }
}

export default authReducer;