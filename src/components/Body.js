import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {auth} from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'  
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch= useDispatch();
    // const navigate=useNavigate();
    const appRouter=createBrowserRouter([
        {
            path: '/',
            element: <Login/>,
            // errorElement: <Login/>,
        },
        {
            path: '/browse',
            element: <Browse/>,
            // errorElement: <Browse/>,
        },
    ])

    //adding user data to our redux store when user logs in or logs out or sign in or sign out
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                dispatch(addUser({uid:user.uid, email:user.email, displayName:user.displayName}));
                //redirecting user to browse page
                // navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                // navigate('/');
            }
        });
    }, [])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body