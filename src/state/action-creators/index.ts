import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const addTowantToread = (payload: {}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WTREAD,
            payload: payload
        })
    }
}

export const addToRead = (payload: {}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.READ,
            payload: payload
        })
    }
}

export const addtoCurrentlyReading = (payload: {}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CURREAD,
            payload: payload
        })
    }
}

export function getAllBooks(payload: []) {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GETALL,
            payload
        })
    }
}


export function getSearchedBooks(payload: []) {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCHEDBOOKs,
            payload
        })
    }
}


export function emptySearchedBooks() {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.EMPTYSEARCHEDBOOK,
            payload : []
        })
    }
}