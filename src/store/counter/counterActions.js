export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREMENT_COUNTER });
    }, 1000);
  };
}
