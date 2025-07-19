import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {
    // const dispatch= useDispatch();
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
    
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body