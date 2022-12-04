import { createStore } from 'redux';

const intialState = {

}
const reducer = (state = intialState, _action: any) => {

  return state;
};

const store = createStore(reducer);

export default store;