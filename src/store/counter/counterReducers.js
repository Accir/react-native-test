import { INCREMENT_COUNTER } from "./counterActions";

const initialState = {
  value: 0,
};

export function counterReducer(state = initialState, actions) {
  switch (actions.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
}
