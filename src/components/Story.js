import { Avatar } from '@mui/material'
import React from 'react'
import "../story.css"
function Story({img,profilesrc,title}) {
    return (
        <div style={{backgroundImage:`url(${img})`}}className='story'>
            <Avatar className='story_avatar' src ={profilesrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story

