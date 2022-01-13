import React from 'react'
import "../header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { useStateValue } from '../Stateprovider';
function Header() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className='header'>
            <div className='header-left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png'/>
            <div className='header-input'>
                <SearchIcon/>
                <input placeholder="search facebook"type="text"/>
            </div>
            </div>
            <div className='header-middle'>
                <div className='header_options header_options--active'>
                <HomeIcon fontSize='medium'/>
                </div>
                <div className='header_options'>
                <FlagIcon fontSize='medium'/>
                </div>
              
                <div className='header_options'>
                <StorefrontOutlinedIcon  fontSize='medium' />
                </div>
                <div className='header_options'>
                <SubscriptionsIcon fontSize='medium' />
                </div>
                <div className='header_options'>
                <SupervisedUserCircleIcon fontSize='medium'/>
                </div>
                </div>
                <div className='header-right'>
                <div className='header_info'>
                    <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                     </div>
                     <IconButton>
                         <AddIcon/>
                         </IconButton>
                         <IconButton>
                         <AddCommentOutlinedIcon/>
                         </IconButton>
                         <IconButton>
                         <NotificationsActiveOutlinedIcon/>
                         </IconButton>
                         <IconButton>
                         <ExpandMoreOutlinedIcon/>
                         </IconButton>

                </div>
        </div>
    )
}

export default Header
