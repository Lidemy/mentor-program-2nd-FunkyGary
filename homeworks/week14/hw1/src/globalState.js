import { UPDATE_NAV_TEXT } from './actionTypes'
import { reducer } from './reducer'


const callbacks = []


let globalState = {
    navText: 'init'
}

function notifyAll() {
    for (let i = 0; i < callbacks.length; i++) {
        callbacks[i](globalState)
    }
}

export const subcribe = cb => {
    callbacks.push(cb);
}

export const dispatch = (action) => {
    globalState.module1 = reducer(globalState.module1, action)
    notifyAll()
}

