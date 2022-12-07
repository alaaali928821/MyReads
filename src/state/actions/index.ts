import { ActionType } from "../action-types/index"

interface WantToReadAction {
    type: ActionType.WTREAD,
    payload: {
        shelf?: string
    }
}

interface ReadAction {
    type: ActionType.READ,
    payload: {
        shelf?: string
    }
}

interface CurruntlyReadingAction {
    type: ActionType.CURREAD
    payload: {
        shelf?: string
    }
}

interface GetAllBooks {
    type: string
    payload: any
}


export type Action = WantToReadAction | ReadAction | CurruntlyReadingAction | GetAllBooks;