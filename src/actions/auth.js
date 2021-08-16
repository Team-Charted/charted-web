import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAILURE, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types'
import setAuthToken from '../util/setAuthToken'

//load user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth')
        console.log(res)
        dispatch({type: USER_LOADED, payload: res.data})
    } catch(err) {
        dispatch({type: AUTH_ERROR})
    }
}

//register user
export const registerUser = (userData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(userData)
    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
        dispatch(loadUser())
    } catch(err) {
        const errors = err.response.data.errors

        if (errors) {
            console.log(errors)
        }

        dispatch({type: REGISTER_FAILURE})
    }
}

//login user
export const loginUser = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password})
    try {
        const res = await axios.post('/api/auth', body, config)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        dispatch(loadUser())

    } catch(err) {
        const errors = err.response.data.errors

        if (errors) {
            console.log(errors)
        }

        dispatch({type: LOGIN_FAILURE})
    }
}

//logout user
export const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT})
}