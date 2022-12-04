import { ActionType } from "../action-types/index"

interface WantToReadAction {
    type: ActionType.WTREAD,
    payload: {}
}

interface ReadAction {
    type: ActionType.READ,
    payload: {}
}

interface NoneAction {
    type: ActionType.NONE
}

export type Action = WantToReadAction | ReadAction | NoneAction;