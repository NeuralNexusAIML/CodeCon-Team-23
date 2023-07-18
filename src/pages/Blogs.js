import React from 'react';
import logo from '../assets/PlainLogo.png'
import logo1 from '../assets/logo1.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import modal from './modal';


const Blogs = () => {

  const [events, setEvents] = React.useState([])
  const [isDetailsPressed, setIsdetailsPressed] = React.useState(false)
  const [eventId, setEventid] = React.useState()
  React.useEffect(()=>{
    fetchPost();
}, [])

function handleViewDetail(eventID){
  setIsdetailsPressed(true)
  setEventid(eventID)
}

const listItems = events.map(events => 
    <li key={events.id}>
      <p>{events.eventName}</p>
      <p>{String(events.date)}</p>
      <button onClick={() => {handleViewDetail(events.id)}}>view details</button>
      
      <p>{events.id}</p>
      
    </li>

  )
  async function fetchPost(){
    await getDocs(collection(db, "myEvents"))
    .then((QuerySnapshot) => {
        const newData = QuerySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))

        // alert(newData[0][0])
        setEvents(newData)

        // console.log(newData)
    })
}

    return (
    <div>
      <h1>Your Events: </h1>
      
      <ul>{listItems}</ul>


      {isDetailsPressed?
      <div>

        <h1>pressed on event {eventId}</h1>
      </div>  
      :<></>
    }
    </div>
    
    );
  };
  
  export default Blogs;