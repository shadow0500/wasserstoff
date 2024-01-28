// import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Posts from './components/Posts'

import Profile from './components/Profile'
import CreatePost from './components/CreatePost'
const App = () => {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Posts/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/createPost' element={<CreatePost/>}/>
      {/* <Route path='/post' element={<Post/>}/> */}
    </Routes>
    </>
  )
}

export default App