import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "../messenger.css"
import { useStateValue } from '../Stateprovider';
import db from '../firebase';
import firebase from "firebase"
function Messagesender() {
    const [{user},dispatch]=useStateValue()
    const [input,setinput]=useState("");
    const [imgurl,setimgurl]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilepic:user.photoURL,
            username:user.displayName,
            image:imgurl,

        })
        setinput("");
        setimgurl("");
    }
    return (
        <div className='messagesender'>
            <div className='message_top'>
            <Avatar src={user.photoURL}/>
            <form>
                <input  value={input} onChange={(e)=>setinput(e.target.value)}className="message_input"placeholder={`whats on your mimd,${user.displayName}`} type="text"/>
                <input value={imgurl} onChange={(e)=>setimgurl(e.target.value)} placeholder='image url'/>
                <button onClick={handlesubmit} type="submit">
                   Submit
                </button>

            </form>
            </div>
            <div className='message_bottom'>
            <div className="messagesender_option">
            <VideocamIcon style={{color:"red"}}/>
            <h4>Live Video</h4>
            </div>
            <div className="messagesender_option">
            <AddToPhotosIcon style={{color:"green"}}/>
            <h4>Photo/Videos</h4>
            </div>
            <div className="messagesender_option">
            <SentimentSatisfiedAltIcon  style={{color:"yellow"}}/>
            <h4>Feeling/Active</h4>
            </div>

            </div>
        </div>
    )
}

export default Messagesender
