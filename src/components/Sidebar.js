import React from 'react'
import "../sidebar.css"
import Sidebarrow from './Sidebarrow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ChatIcon from '@mui/icons-material/Chat';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../Stateprovider';
function Sidebar() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className='sidebar'>
        <Sidebarrow src={user.photoURL} title={user.displayName} /> 
        <Sidebarrow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />   
        <Sidebarrow Icon={EmojiFlagsIcon} title="Pages" />   
        <Sidebarrow Icon={ChatIcon} title="Messenger"/>  
         <Sidebarrow Icon={StoreIcon} title="Markerplace"/>   
         <Sidebarrow Icon={VideoLibraryIcon} title="Videos"/>         
         <Sidebarrow Icon={ ExpandMoreIcon }/>
        </div>
    )
}

export default Sidebar

