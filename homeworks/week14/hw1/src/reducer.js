import { combineReducers } from 'redux'
import { UPDATE_NAV_TEXT } from './actionTypes'

const state = {
    navText: '123'
}

function reducer(globalState = state, action) {
    switch (action.type) {
        case UPDATE_NAV_TEXT:
            return {
                ...globalState,
                navText: action.value
            }
        default:
            return globalState
    }
}

export default reducer