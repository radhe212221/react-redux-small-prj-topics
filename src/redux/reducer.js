const intialstate = {
  a: [],
};

function reducer(state = intialstate, action) {
  console.log(action?.payload);
  switch (action.type) {
    case 'insert':
      return { ...state, a: action.payload };
    case 'delete':
      return { ...state, a: action.payload };
    default:
      return state;
  }
}

export default reducer;
