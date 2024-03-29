import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {

    const [show,handleShow] = useState(false);
    
    let navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else 
            handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar)
    },[])

  return (
    <div className= {`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img onClick={ () => {
            navigate('/');
        } }
        className='nav__logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
        <img className='nav__avatar' onClick={() => {
            navigate('/profile');
        }}
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt=''/>
        </div>
    </div>
  )
}

export default Nav