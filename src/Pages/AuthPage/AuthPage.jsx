import React from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

function AuthPage({setUser}) {
  return (
    <>
    <h1>AuthPage</h1>
    <div className='authContainer'>
        <div className='subAuth'>    
        <h1>Sign Up</h1>
            <SignUpForm setUser={setUser}/>
       </div>

        <div className='subAuth'> 
        <h1>Log In</h1>
        <LoginForm setUser={setUser} />

        </div>
    </div>
    </>
  )
}

export default AuthPage