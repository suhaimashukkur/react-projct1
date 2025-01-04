import react, { useContext } from 'react'
import './homebanner.css' 
import bannerImage from '../../assets/HeaderImage 1.png'
import { ThemeContext, ThemeUpdateContext } from '../ThemeContext'


function Banner(props){
  const darkTheme = useContext(ThemeContext)
  const setDarkTheme = useContext(ThemeUpdateContext)

    return (
        <section className={`banner ${darkTheme?"dark1":""}`}>
        <div  className="banner-1">
      <div className={`banner-1-child1 ${darkTheme?"dark1":""}`}>
        Branding | image making

      </div>
      <div >
       <h2 className={`banner-1-child2 ${darkTheme?"dark1":''}`}> Visual Designer</h2>
      </div>
      <div className={`banner-1-child3 ${darkTheme?"dark3":""}`}>
        This is a template figma file,turned into code using Anema.Learn more at AnemaApp.com

      </div>

       <button className={`button-banner1 ${darkTheme?"white":''}`}  onClick={() =>{props.setModal(true)}}>Contact</button>
  
      </div>
      
        <div className="banner-2">
        
            <img className="cont2-img"  src={bannerImage} alt="body-image"></img>
           
            
       
      </div>
 
     
        </section>

    )
}
export default Banner;