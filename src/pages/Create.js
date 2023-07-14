import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
 
export default function Create() {

    const [eventName, setEventNAme] = useState("")
    const [date, setDate] = useState("")
    const [eventType, setEventType] = useState("")
    const[registration, setRegistration] = useState(0)

    async function handleSubmit(){
        
        // alert("Asdf")
        try {
            const docRef = await addDoc(collection(db, "event"), {
              "eventName": eventName,    
              "date": date,
              "eventType": eventType,
              "registration": registration
            });
            console.log("Document written with ID: ", docRef.id);
            alert("sucess")
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("error")
          }

          try {
            const docRef = await addDoc(collection(db, "myEvents"), {
              "eventName": eventName,    
              "date": date,
              "eventType": eventType,
              "registration": registration
            });
            console.log("Document written with ID: ", docRef.id);
            alert("sucess")
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("error")
          }

          setEventNAme("")
          setDate()
          setEventType("")
          setRegistration("")
    }

    return(
        <div>
            <div>
                <h1>Fill your event details</h1>
            </div>

            <div>
                <form style={{backgroundColor: 'ButtonShadow'}}>
                <label style={{width: 100}} >
                Name:
                <input type="text" name="name" value = {eventName} onChange={(txt) => setEventNAme(txt.target.value)}/>
                </label>

                <label>
                    Date:
                    <input type='date' name='date' onChange={(text)=> setDate(((text.target.valueAsDate)))}/>
                </label>

                <label>
                    eventType:
                    <input type='text' name='event type' onChange={(text)=> setEventType(text.target.value)}/>
                </label>

                <label>
                    Registration cost:
                    <input type='number' name='name' value = {registration} onChange={(txt) => setRegistration(txt.target.value)}/>
                </label>


                <input type="submit" value="Submit" onSubmit={handleSubmit}/>
                </form>


            </div>
                
                <button onClick={() => {alert(eventName)}}>event</button>
                <button onClick={() => {alert(date)}}>date</button>
                
                <h1>{eventName}</h1>
                <h1>{(String(date))}</h1>
                <h1>{eventType}</h1>
                <h1>{String(registration)}</h1>
            <div>

            <div>
                <button onClick={handleSubmit}>upload data</button>
            </div>

            </div>
        </div>
    )
}