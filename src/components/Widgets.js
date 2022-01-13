import React from 'react'
import "../widget.css"
function Widgets() {
    const currdate = new Date().toDateString();
    return (
       <div>
           <div>
               <h1> Made by Ankush Banerjee</h1>
              <img width="200px"src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/p240x240/230408511_1176965039482151_2285637534360683524_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=LHZYt0XcNdcAX92Dly8&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8A54wuBUTjcD7QugljXKnss0ghVQFlKClMMd3GvatL0w&oe=61E5AAEE"></img>
           </div>
           
           <div>
               <h1>Today is {currdate}</h1>
           </div>
           <div className='note'>
               <h3>
                   <h2>
                       Note:-
                   </h2>
                   This is just a replica of facebook ,
                   You can write anything and paste any url of the image you want to show.
               </h3>

           </div>
       </div>
    )
      
  
    
}

export default Widgets
