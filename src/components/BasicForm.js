import React from "react";
import useInputs from "../hooks/user-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    InputBlurHandler: nameInputBlurHandler,
    InputChangeHandler: nameInputChangeHandler,
    hasError: nameInputHasError,
    reset: resetName
  } = useInputs(value => value.trim() !== '')

  let formIsValid = false;
  if(firstNameIsValid){
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid) {
      return;
    }

    resetName();
  
  };

  
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={firstName}
          />
          {nameInputHasError && <p style={{color:'red'}}>Name should not be empty</p>}
        </div>
        {/* <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div> */}
      </div>
      {/* <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div> */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
