
// import { Outlet } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import MyFooter from './components/MyFooter'
// import ScrollTop from './components/ScrollTop'

// function App() {


//   return (
//     <>
//     <ScrollTop />
//     <NavBar/>
//     <div className=' min-h-screen'>

//       <Outlet/>
//     </div>
//       <MyFooter/>
    
//     </>
//   )
// }

// export default App


import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyFooter from './components/MyFooter';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />
      <NavBar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;