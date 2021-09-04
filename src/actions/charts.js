import axios from '../util/axios'
import { GET_CHARTS, CHARTS_ERROR } from './types'

//get charts
export const getCharts = () => async dispatch => {
    try {
        const res = await axios.get('/api/charts')
        dispatch({ type: GET_CHARTS, payload: res.data })
    } catch (err) {
        console.log(err)
        dispatch({ type: CHARTS_ERROR, payload: { msg: err.response.statusText, status: err.response.status } })
    }
}