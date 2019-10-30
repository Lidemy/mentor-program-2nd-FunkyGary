import { UPDATE_NAV_TEXT } from './actionTypes'

// action creater
export const updateNavText = text => {
    return {
        type: UPDATE_NAV_TEXT,
        value: text
    }
}