import React from 'react'
import './contactModal.css'

function ContactModal(props) {
  return (
 
//   <div className="main-cont" >
    <div className={ `main-cont ${props.modal?"activemodal":""}`}>
       
  <div className="form-cont">
    <button className='close-modal' onClick = {() =>props.setModal(false)}>X</button>
     
          <h1 className='head'>Get In Touch</h1>
          <form>
              <div className="label-section">
                  <div className="name-cont">
                  <input type="text" className="name-section" name="name" placeholder="Name" />
                  <input type="email" className="name-section" name="email" placeholder="Email" />
              </div>
             
                  <input type="tel" className="tel-section" name="telephone" placeholder="TelePhone" />
                 
                  <textarea  className="message-section" name="message" placeholder="Message" ></textarea>
                  <button type="submit" className="button">Submit</button>

              </div>
          </form>

      
  </div>
</div>
   
  )
}

export default ContactModal