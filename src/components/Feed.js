import React, { useEffect, useState } from 'react'
import "../feed.css"
import Messagesender from './Messagesender'
import Post from './Post'
import Storyreel from './Storyreel'
import db from '../firebase'
function Feed() {
  const[posts,setposts]=useState([]);
  useEffect(() => {
  db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
    setposts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
  })
  
   }, [])

    return (
        <div className='feed'>
            <Storyreel/>
            <Messagesender/>
            {posts.map((post)=>(
                <Post 
                key={post.id}
                profilepic={post.data.profilepic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
             
            ))}
            <Post 
          
            />
         
        </div>
    )
}

export default Feed
