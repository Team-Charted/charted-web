import { combineReducers } from 'redux'
import auth from './auth'
import charts from './charts'
import results from './results'

export default combineReducers({
    auth: auth,
    charts: charts,
    results: results
})