import React from 'react'

export const checkValidData = (email, password,name) => {
  const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);

  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
.test(password);

//   const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);


  if (!isEmailValid) {
    return 'Please enter a valid email address'
  }
  if (!isPasswordValid) {
    return 'Please enter a valid password'
  }

//   if (!isNameValid) {
//     return 'Please enter a valid name'
//   }
  return null;
}

export const checkValidDataName = (name, email,password) => {
  const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);

  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
.test(password);

  const isNameValid = /^[A-Za-z ]{2,30}$/.test(name);

  if (!isNameValid) {
    return 'Please enter a valid name'
  }
  if (!isEmailValid) {
    return 'Please enter a valid email address'
  }
  if (!isPasswordValid) {
    return 'Please enter a valid password'
  }

  
  return null;
}