import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidDataName } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true);

  const [errormsg,seterrormsg]=useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  // const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleButtonClick = () => {
    // Here we will be validating the data entered by user. We will write our validation logic in utility.js file.
    // console.log(email);
    // console.log(password);
    let message=null;
    if(isSignInForm){
      //sign in user
        message = checkValidData(email.current.value, password.current.value);
        seterrormsg(message);
        if(message)return;
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            console.log(user);
            // navigate('/browse');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode + "-" + errorMessage);
          });
    }
    else{
      // console.log(name);
      // console.log(email);
      // console.log(password);
      //sign up user

        message = checkValidDataName(name.current.value, email.current.value, password.current.value);
        seterrormsg(message);
        if(message)return;

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value,
              }).then(() => {
                // Profile updated!
                const user = auth.currentUser;
                dispatch(addUser({uid:user.uid, email:user.email, displayName:user.displayName}));
                // navigate('/browse');
              
              }).catch((error) => {
                // An error occurred
                seterrormsg(error.message);
              });
            // navigate('/browse');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode + "-" + errorMessage);
            // ..
          });
        }
    // console.log(message);
  }
    

    

  const toggleSignInForm = () =>  {
    setisSignInForm(!isSignInForm);
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