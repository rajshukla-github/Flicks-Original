import React, { useState } from 'react'
import './LoginScreen.css';
import SignupScreen from './SignupScreen';
import image1_logo from '../image/image1_logo.png'

function LoginScreen() {
    const [signIn, setSignIn]=useState(false);



    return (
        <div className="loginScreen">
            <div className="LoginScreen_background">

                <img 
                className="loginScreen_logo "
                src={image1_logo} alt="" />
                <button  onClick={() => setSignIn(true)}
                className='LoginScreen_button'>
                    Sign In
                </button>
                <div className="LoginScreen_gradient">
                    
                </div>
                <div className="LoginScreen__body">
                    {signIn ? (
                        <SignupScreen/>
                    ):(

                    <>
                    <h1>Unlimited Films ,TV shows and more.</h1>
                    <h2>Watch anywhere, Cancel anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                    <div className="LoginScreen__input">
                        <form >
                              <input type="email" placeholder="Email address" />
                              <button onClick={()=>setSignIn(true)}
                                className="loginScreen_getstarted">Get STARTED</button>
                        </form>

                    </div>
                    </>
                    )}

                </div>
            </div>
            
        </div>
    )
}

export default LoginScreen
