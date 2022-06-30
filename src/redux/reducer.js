const intialstate = {
  a: [],
  status: -1,
};

function reducer(state = intialstate, action) {
  console.log(action?.payload);
  switch (action.type) {
    case 'insert':
      return { ...state, a: action.payload, status: 1 };
    case 'delete':
      return { ...state, a: action.payload, status: 0 };
    default:
      return state;
  }
}

export default reducer;
