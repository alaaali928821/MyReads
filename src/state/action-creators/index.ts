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

export const addtoNone = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.NONE
        })
    }
}