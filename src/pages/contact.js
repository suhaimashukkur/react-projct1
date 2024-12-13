import React from 'react'
import './contact.css'

function Contact(props) {
  return (
  <div className='container'>
     <div className='image-cont'>
    
    </div>
  <div className="main-cont2">
       
  <div className="form-cont2">
  <button className='close-modals' >X</button>
          <h1>Get In Touch</h1>
          <form>
              <div className="label-section2">
                  <div className="name-cont2">
                  <input type="text" className="name-section2" name="name" placeholder="Name" />
                  <input type="email" className="name-section2" name="email" placeholder="Email" />
              </div>
             
                  <input type="tel" className="tel-section2" name="telephone" placeholder="TelePhone" />
                 
                  <textarea  className="message-section2" name="message" placeholder="Message" ></textarea>
                  <button type="submit" className="button2">Submit</button>

              </div>
          </form>

      
  </div>
  </div>
 

</div>
  
  )
}

export default Contact