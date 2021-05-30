import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputSet } from '../redux/actions/userAction';

const User = () => {
  const dispatch = useDispatch()

    const handleInputChange = (inputName, inputValue) => {
        dispatch(handleInputSet(inputName, inputValue))
    }
    const inputData = useSelector(state => state.user.inputData);

    console.log('user', inputData)
    return (
        <div>
            <h1>This is user Form</h1>
            <input onChange={(e) => handleInputChange('name', e.target.value) } type="text" placeholder="Enter name"/>
            <input onChange={(e) => handleInputChange('phone', e.target.value)} type="text"  placeholder="Enter name" />
        </div>
    );
};

export default User;