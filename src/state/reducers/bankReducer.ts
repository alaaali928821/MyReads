import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = 0;

const reducer = (state: {} = initialState, action: Action): {} => {
    switch (action.type){
        case ActionType.WTREAD:
            return state ;
        case ActionType.READ:
            return state;
        case ActionType.NONE:
            return 0;
        default:
            return state
    }
}

export default reducer