import React from 'react';
import logo from '../assets/PlainLogo.png'
import logo1 from '../assets/logo1.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config';


// import Create from './Create';
import '../App.css'
import { Navigate } from 'react-router-dom';
function Home() {


    const [events, setEvents] = React.useState([{event: "--", time: 0, date: "--"}])
    const [eventId, setEventID] = React.useState()
    const [isDetailsPressed, setIsdetailsPressed] = React.useState(false)
    const [eventName, setEventName] = React.useState();

    const [userName, setUserName] = React.useState()
    const [email, setEmail] = React.useState()
    const [roll, setRoll] = React.useState()
    const [phone, setPhone] = React.useState()


    function handleRegister(eventID, eventName){
        setIsdetailsPressed(true)
        setEventID(eventID)
        setEventName(eventName)
    }

    async function handleRegisterSubmit(){
        // let pathString = "event/"+eventId+"/registration"

        //"/event/1K7HxBfHddQ79C1EZlnT/registration"
        // alert(pathString)
        
        // alert("Asdf")
        try {
            const docRef = await addDoc(collection(db, "event/1K7HxBfHddQ79C1EZlnT/registration"), {
              "event": "worksing",    
              "date": "tuesday",
              "time": 12
            });
            console.log("Document written with ID: ", docRef.id);
            alert("sucess")
          } catch (e) {
            console.error("Error adding document: ", e);
            alert(e)
          }

          setIsdetailsPressed(false)
          setEventID()
          setEventName()
          setUserName()
          setEmail()
          setRoll()
          setPhone()
    }


    React.useEffect(()=>{
        fetchPost();
    }, [])

    const listItems = events.map(events => 
        <li key={events.id}>
          <p>{events.eventName}</p>
          <p>{String(events.date)}</p>
          <button onClick={() => {handleRegister(events.id, events.eventName)}}> Register </button>
          <p>{events.id}</p>
        </li>
    
      )
    async function fetchPost(){
        await getDocs(collection(db, "event"))
        .then((QuerySnapshot) => {
            const newData = QuerySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))

            // alert(newData[0][0])
            setEvents(newData)

            // console.log(newData)
        })
    }

    async function writeDoc(){
        
        // alert("Asdf")
        try {
            const docRef = await addDoc(collection(db, "event"), {
              "event": "worksing",    
              "date": "tuesday",
              "time": 12
            });
            console.log("Document written with ID: ", docRef.id);
            alert("sucess")
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("error")
          }
    }
    async function registerONDb(){

        await createUserWithEmailAndPassword(auth, "email.2@gmail.com", "password")
            .then((userCredential) => {
                const user = userCredential.user.uid;
                console.log(user)
                alert(user)
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                alert("errorr")
            })

    }
    
    
    // const navigate = useNavigate();

    // const [type, setType] = React.useState("ALL Events")

    return (
        <div>
            {/* <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src= {logo}  />
                    </div>
                    <li><a href="#your events" onClick={() => setType("All Events")}>Your events</a></li>
                    <li><a href="#tutorials" onClick={() => setType("All Events")}>All events</a></li>
                    <li><a href='./Create'> + create</a></li>
                    
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav> */}
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">

                      
                        <h1 class="text-big" onClick={() => {alert()}}>

                          All Events
                        </h1>

                        <button onClick={() => {fetchPost()}}>But</button>
                      
                    </div>
                </div>
            </section>


            <section class="section">
                <div class="box-main">
                    {/* <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>

                        <ul>{listItems}</ul>
                    </div> */}
                    <ul>{listItems}</ul>
                </div>
            </section>

            <section>
                <div>
                    {isDetailsPressed
                    ? <div>
                        <h1>register for {eventId} and {eventName}</h1>

                        <form>
                            <li>
                            <label>
                                <input type='text' name='name' value = {userName} onChange={(txt) => (txt.target.value)}/>
                                NAME
                            </label>
                            </li>

                            <li>
                            <label>
                                <input type= 'email' name='email' value={email} onChange={(txt) => (txt.target.value)}/>
                                email
                            </label>
                            </li>

                            <li>
                            <label>
                                <input type='number' name='Roll' value = {roll} onChange={(txt) => (txt.target.value)}/>
                                Roll
                            </label>
                            </li>

                            <li>
                            <label>
                                <input type='number\' name='Phone' value={phone} onChange={(txt) => (txt.target.value)}/>
                                Phone
                            </label>
                            </li>

                            <li>
                                <input type='submit' name = 'sumbit' onClick={() => {handleRegisterSubmit()}}></input>
                            </li>
                        </form>
                    </div>
                    :<></>
                    }
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )

        }
export default Home