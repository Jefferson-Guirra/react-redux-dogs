import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User.js'
import { useDispatch, useSelector } from 'react-redux';
import  Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound';
import { autoLogin } from './store/user';



function App() {
  const dispatch = useDispatch()
  let wait = false
  React.useEffect(()=>{
    
    if(!wait){
      dispatch(autoLogin())
    }
    wait = true
  
    
  },[dispatch,wait])
  return (
   <div className='App'>
      <BrowserRouter>
        
        <Header />
        <main className='AppBody'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />}/>
            <Route path='conta/*' element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }/>
            <Route path='foto/:id' element={<Photo />} />
            <Route path='perfil/:user' element={<UserProfile />}/>
            <Route path='*' element={<NotFound />}/>

          </Routes>
        </main>
        <Footer />
        

    
      </BrowserRouter>
    </div>
    
  );
}

export default App;
