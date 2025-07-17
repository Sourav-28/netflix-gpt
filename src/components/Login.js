import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidDataName } from '../utils/validate';

const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);

  const [errormsg,seterrormsg]=useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);


  const handleButtonClick = () => {
    // Here we will be validating the data entered by user. We will write our validation logic in utility.js file.
    // console.log(email);
    // console.log(password);
    if(isSignInForm){
    const message = checkValidData(email.current.value, password.current.value);
    seterrormsg(message);
    }
    else{
      // console.log(name);
      // console.log(email);
      // console.log(password);
    const message = checkValidDataName(name.current.value, email.current.value, password.current.value);
    seterrormsg(message);
    }
    // console.log(message);
  }

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/DE-en-20250714-TRIFECTA-perspective_69e92d2e-c640-442c-8138-347e74824541_large.jpg' alt='logo1'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600'/>)}

            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600'/>

            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>

            <p className='text-red-700 font-bold py-2 text-lg'>{errormsg}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={()=>handleButtonClick()}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={()=>toggleSignInForm()}>{isSignInForm? "New to Netflix? Sign Up now!" : "Already have an account? Sign In now!"}</p>
        </form>
    </div>
  )
}

export default Login