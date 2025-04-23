import './App.css'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Product from './Pages/Product'
import Report from './Pages/Report'
import Settings from './Pages/Setting'
import {Routes , Route } from "react-router-dom"

function App() {

  return (

    <>   
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
  
    </>
  )
}

export default App
