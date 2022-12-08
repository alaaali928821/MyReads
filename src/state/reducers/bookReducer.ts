import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState: any[] = [];

const reducer = (state = initialState, action: Action): {} => {
    switch (action.type) {
        case ActionType.GETALL:
            return [...state, ...action.payload];

        case ActionType.SEARCHEDBOOKs:
            if (state.length > 0) {
                state = [];
                state = [...state, ...action.payload]
            } else {
                state = [...state, ...action.payload]
            }
            return state;

        case ActionType.WTREAD:
            return [...state.filter(book => book.id !== action.payload.id)
                , {
                ...action.payload,
                shelf: ActionType.WTREAD
            }];
        case ActionType.READ:
            return [...state.filter(book => book.id !== action.payload.id)
                , {
                ...action.payload,
                shelf: ActionType.READ
            }];
        case ActionType.CURREAD:
            return [...state.filter(book => book.id !== action.payload.id)
                , {
                ...action.payload,
                shelf: ActionType.CURREAD
            }];
        default:
            return state
    }
}

export default reducer