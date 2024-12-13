import react from 'react'
import './homebanner.css' 
import bannerImage from '../../assets/HeaderImage 1.png'


function Banner(props){

    return (
        <section className="banner">
        <div className="banner-1">
      <div className="banner-1-child1">
        Branding | image making

      </div>
      <div >
       <h2 className="banner-1-child2"> Visual Designer</h2>
      </div>
      <div className="banner-1-child3">
        This is a template figma file,turned into code using Anema.Learn more at AnemaApp.com

      </div>
      <div className="banner-1-child4">
       <div className="button-banner1" ><button className="contact-btn" onClick={() =>{props.setModal(true)}}>Contact</button></div> 
    </div>
      </div>
      
        <div className="banner-2">
            <img className="cont2-img" src={bannerImage} alt="body-image"></img>
       
      </div>
     
        </section>

    )
}
export default Banner;