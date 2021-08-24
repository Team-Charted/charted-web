import { GET_RESULTS, RESULTS_ERROR } from '../actions/types'

const initialState = {
    results: [],
    loading: true,
    error: null
}

export default function resultsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_RESULTS:
            return {
                ...state,
                results: action.payload,
                loading: false
            }
        case RESULTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}