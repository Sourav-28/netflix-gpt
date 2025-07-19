import React from 'react'
import { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import {auth} from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'  
import { addUser, removeUser } from '../utils/userSlice'
import { logo, userIcon } from '../utils/constants';

const Header = () => {
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const dispatch= useDispatch();
  // const navigate=useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // navigate('/');
      }).catch((error) => {
        // An error happened.
        navigate('/error');
      });
  }

  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                dispatch(addUser({uid:user.uid, email:user.email, displayName:user.displayName}));
                //redirecting user to browse page
                navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });

        // unsubscribe from onAuthStateChanged when component unmounts
        return () => unsubscribe();
    }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={logo} alt='logo'/>

    {user && <div className='flex p-2'>
      <img className='w-12 h-12' alt='usericon'
        src={userIcon}/>
        <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
    </div>
    }
    </div>
  )
}

export default Header