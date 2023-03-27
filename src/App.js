import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firbase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice'
import { login } from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch])
 
  return (
    <div className="app">     
    <BrowserRouter>
    {!user ? (<LoginScreen />):(
    <Routes>
      <Route exact path="/profile" element={<ProfileScreen />}></Route>
      <Route exact path="/" element={<Homescreen />}>
      </Route>
    </Routes>)}
  </BrowserRouter>
    </div>
  );
}

export default App;
