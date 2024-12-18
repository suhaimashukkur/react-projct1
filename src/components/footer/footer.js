import React, { useContext } from "react";
import './footer.css'
import footerimg1 from '../../assets/Vector.png';
import footerimg2 from '../../assets/Vector (1).png';
import footerimg3 from '../../assets/Vector (2).png';
import footerimg4 from '../../assets/Vector (3).png';
import footerimg5 from '../../assets/Vector (4).png';
import footerimg1dark from '../../assets/discord.png';
import footerimg2dark from '../../assets/facebook.png';
import footerimg5dark from '../../assets/behance.png';
import footerimg4dark from '../../assets/nstagram.png';
import footerimg3dark from '../../assets/dribbble.png'; 
import { ThemeContext } from "../ThemeContext";


function Footer (){
    const darkTheme = useContext(ThemeContext)
 return(
    <section class={`cont-footer ${darkTheme?"dark1":''}`}>
        
        <div >
            <h2 class={`footer-1 ${darkTheme?"dark1":''}`}>Lets work together </h2>

        </div>
     <div class="footer-2">
        <div class="footer-2child">
            <div class={`footer-2child1 ${darkTheme?"dark1":''}`}>
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </div>
          <div class="footer-3">
             <img class="img1" src={darkTheme?footerimg1dark:footerimg1} alt="contact1"></img>
             <img class="img2" src={darkTheme?footerimg2dark:footerimg2} alt="contact2"></img>
             <img class="img3" src={darkTheme?footerimg3dark:footerimg3} alt="contact3"></img>
             <img class="img4" src={darkTheme?footerimg4dark:footerimg4} alt="contact4"></img>
             <img class="img5" src={darkTheme?footerimg5dark:footerimg5} alt="contact5"></img>
          </div>
      </div>
   
    
        <div class="footer-button">
        <div class="footer-button1">
            <div class="footer-text">Name</div>
        </div>
        <div class="footer-button2">
            <div class="footer-text">Email</div>
        </div>
        <button class={`footer-button3 ${darkTheme?"dark2":""}`} >
           Submit
        </button>
        </div>
   
    


    
    </div>




    
    </section>
    )
}

export default Footer;