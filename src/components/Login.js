import { Button } from '@mui/material'
import React from 'react'
import "../login.css"
import { auth,provider } from '../firebase'
import {  signInWithPopup } from "firebase/auth";
import { useStateValue } from '../Stateprovider';
import { actionTypes } from '../reducer';
function Login() {
    const [{user},dispatch]=useStateValue()
    const signin=()=>{

auth.signInWithPopup(provider)
.then(result=>{
    dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })

})
    }
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //     dispatch({
    //         type:actionTypes.SET_USER,
    //         user:result.user
    //     })
       
    
    return (
        <div className='login'>
            <div className='login_logo'>
               
          
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png'/>
            <h1>FACEBOOK</h1>
            </div>
            <div className='ankush'>
            
            
            <img src='https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/p843x403/271050852_1278985169280137_3269965679538767339_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=rBsWGtFRSgMAX9DOsfR&tn=WIUYp0kpe-qeyzMq&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8mSH-lT0rZogP2sg10Zl00Uno83mfg_pmGBC4H2JwUDg&oe=61E37994'/>
            <strong><h3> BY ANKUSH</h3></strong> 
            </div>
            <Button type="submit" onClick={signin}>Sign In</Button>
          
        </div>
    )
}

export default Login
