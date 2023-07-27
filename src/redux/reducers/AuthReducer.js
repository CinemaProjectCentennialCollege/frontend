import { AuthActionTypes } from '../actions/AuthActions'

const INITIAL_STATE = {
    loggedIn: false,
    
    accessToken: null,
    // sessionToken: '',

    rememberMe: null,
    user: null,
    cart: null
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    // let user, accessToken, rememberMe

    switch (action.type) {

        case AuthActionTypes.REGISTER:
            return { ...state, user: action.payload }

        case AuthActionTypes.SET_FIRST_TIME_USER:
            return { ...state, firstTimeUser: false }

        case AuthActionTypes.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }

        // case AuthActionTypes.SET_SESSION_TOKEN:
        //     return { ...state, sessionToken: action.payload }

        case AuthActionTypes.SET_CART:
            return { ...state, cart: action.payload }

        case AuthActionTypes.LOGIN:
            console.log("action.payload: ", action.payload)
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                cart: action.payload.cart,
                accessToken: action.payload.token
            }

        case AuthActionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                cart: null,
                loggedIn: false,
                accessToken: null,
                sessionToken: '',
            }

        default:
            return state
    }
}

export default AuthReducer