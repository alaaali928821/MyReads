import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = 0;

const reducer = (state: {} = initialState, action: Action): {} => {
    switch (action.type){
        case ActionType.WTREAD:
            console.log('wantToread')
            return state ;
        case ActionType.READ:
            console.log('read')
            return state;
        case ActionType.CURREAD:
            console.log("currentlyReading")
            return 0;
        default:
            return state
    }
}

export default reducer