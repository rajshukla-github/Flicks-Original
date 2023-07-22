import React from 'react'
import Nav from '../Nav';
import './ProfileScreen.css';
import image2_Avatar from '../image/image2_Avatar.png'
import { selectUser } from '../features/userSlice';
import {useSelector} from 'react-redux'
import {auth} from '../firebase'

function ProfileScreen() {

    const user= useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className="profileScreen__body">
                <div className="profileScreen__info">
                    <img src={image2_Avatar} alt="" />
                   <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <div className="plan_div">
                            <h3>Premium </h3>
                            <button className='plan_button'>Free</button>
                            </div>


                            <button onClick={()=> auth.signOut()} className='profileScreen_signout'>Sign Out</button>
                        </div>
                 </div> 

                </div>
            </div>

        </div>
    )
}

export default ProfileScreen
