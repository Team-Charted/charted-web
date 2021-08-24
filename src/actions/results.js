import axios from 'axios'
import { GET_RESULTS, RESULTS_ERROR } from './types'

//get results
export const getResults = () => async dispatch => {
    try {
        const res = await axios.get('/api/results')
        dispatch({type: GET_RESULTS, payload: res.data})
    } catch(err) {
        console.log(err)
        dispatch({type: RESULTS_ERROR, payload: {msg: err.response.statusText, status: err.response.status}})
    }
}