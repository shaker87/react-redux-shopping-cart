import * as Types from '../Types/UserType';
const initialState = {

  inputData: {
    name: '',
    phone: '',
  },
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.USER_INPUT_SET:
      console.log(`action.payload`, action.payload);
      const cloneObj = { ...state.inputData };
      cloneObj[action.payload.inputName] = action.payload.inputValue;
      console.log(`cloneObj`, cloneObj);
      return {
        ...state,
        inputData: cloneObj,
      };
    
    default:
      break;
  }
  return newState;
};

export default userReducer;