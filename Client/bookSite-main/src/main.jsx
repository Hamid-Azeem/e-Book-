// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Outlet, RouterProvider } from 'react-router-dom';
// import router from './routers/router.jsx';
// import createStore from 'react-auth-kit/createStore';
// import AuthProvider from 'react-auth-kit';
// import createRefresh from 'react-auth-kit/createRefresh';

// const my_refresh_api = createRefresh({
//   interval: 10 ,
//   refreshApiCallback: async (param) => {
//     try {
//       const response = await axios.post("/refresh", param, {
//         headers: {'Authorization': `Bearer ${param.authToken}`}
//       })
//       console.log("Refreshing")
//       return {
//         isSuccess: true,
//         newAuthToken: response.data.token,
//         newAuthTokenExpireIn: 10,
//         newRefreshTokenExpiresIn: 60
//       }
//     }
//     catch(error){
//       console.error(error)
//       return {
//         isSuccess: false
//       } 
//     }
//   }
// })

// const store = createStore({
//   authName:'_auth',
//   authType:'cookie',
//   cookieDomain: window.location.hostname,
//   refresh: my_refresh_api
//   // cookieSecure: window.location.protocol === 'https:',
// });


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider 
//      store={store}
//     >

//     <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import './index.css'

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)