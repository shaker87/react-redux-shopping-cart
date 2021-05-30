
import * as Types from '../Types/UserType';

export const handleInputSet = (inputName, inputValue) => async dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };
  console.log(`data`, data);
  dispatch({type: Types.USER_INPUT_SET, payload: data});
};

