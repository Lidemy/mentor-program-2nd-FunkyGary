import { CHANGE_TITLE } from './actionTypes'

// action creater
export const changeTitle = (title) => {
    return {
        type: CHANGE_TITLE,
        title: title
    }
}