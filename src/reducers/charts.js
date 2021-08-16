import { GET_CHARTS, CHARTS_ERROR } from '../actions/types'

const initialState = {
    charts: [],
    loading: true,
    error: null
}

export default function chartsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CHARTS:
            return {
                ...state,
                charts: action.payload,
                loading: false
            }
        case CHARTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}