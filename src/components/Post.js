import { Avatar } from '@mui/material'
import React from 'react'
import "../post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
function Post({profilepic,image,username,timestamp,message}) {
    return (
        <div className='post'>
            <div className='post_top'>
            <Avatar src={profilepic} className='post_avatar'/>
           
            <div className='post_info'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toLocaleTimeString()}</p>
            </div>
            </div>
            <div className='post_bottom'>
            <p>{message}</p> 
            </div>
            <div className='post_img'>

            <img src={image}/>

            </div>
            <div className='post_options'>
                <div className='post_option'>
                <ThumbUpIcon/>
                <p>Like</p>
                </div>
                <div className='post_option'>
                <CommentIcon/>
                <p>Comment</p>
                </div>
          </div>
        </div>
    )
}

export default Post
