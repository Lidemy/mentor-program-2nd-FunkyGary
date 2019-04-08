import { combineReducers } from 'redux'
import { CHANGE_TITLE } from './actionTypes'

const initialState = {
    title: 'default'
}

function AppReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            {
                return {
                    ...state,
                    title: action.title
                }
            }
    }
}

const App = combineReducers({
    app: AppReducer
})

export default App