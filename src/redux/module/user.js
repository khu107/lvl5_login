export const addUser = 'addUser';

export const ADDUSER = (payload) => {
  return {
    type: addUser,
    payload,
  };
};

const initialState = {
  id: '',
  password: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default reducer;
