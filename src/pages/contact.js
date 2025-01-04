import React, { useRef, useState } from 'react'
import './contact.css'

function Contact(props) {
// const [formData,setFormData] = useState({name:"",email:"",phone:"",msg:""});
const[visible,setvisible] = useState(true)
// function handleChange(e){
//   setFormData({...formData, [e.target.name]:e.target.value})

// }

const nameRef = useRef();
const emailRef = useRef();
const phoneRef = useRef();
const msgRef = useRef();



const onSubmit = (e) =>{
  e.preventDefault();
  const formData = {
    name:nameRef.current.value,
    email:emailRef.current.value,
    phone:phoneRef.current.value,
    msg:msgRef.current.value,
  }
  console.log(formData)

}
const closeButton = ()=>{
  setvisible(false)
}





  return (
    visible &&(
  <div className="container">
     <div className='image-cont'>
    
    </div>
  <div className="main-cont2">
       
  <div className="form-cont2">
  <button className='close-modals' onClick={closeButton}>X</button>
          <h1>Get In Touch</h1>
          <form  onSubmit={onSubmit}>
              <div className="label-section2">
                  <div className="name-cont2">
                  <input type="text" className="name-section2" name="name" placeholder="Name" ref={nameRef} /*onChange={(e) => handleChange(e)} */ />
                  <input type="email" className="name-section2" name="email" placeholder="Email" ref={emailRef}  /*onChange={(e) => handleChange(e)} *//>
              </div>
             
                  <input type="tel" className="tel-section2" name="phone" placeholder="TelePhone" ref={phoneRef} /*onChange={(e) => handleChange(e)}*/ />
                 
                  <textarea  className="message-section2" name="msg" placeholder="Message" ref={msgRef} /*onChange={(e) => handleChange(e)} */>  </textarea>
                  <button type="submit" className="button2">Submit</button>

              </div>
          </form>

      
  </div>
  </div>
 

</div>
    )
  
  )
}

export default Contact