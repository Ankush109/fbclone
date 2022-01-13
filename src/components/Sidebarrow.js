import { Avatar } from '@mui/material'
import React from 'react'
import "../sidebarrow.css"
function Sidebarrow({title,src,Icon}) {
    return (
        <div className='sidebarrow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default Sidebarrow
