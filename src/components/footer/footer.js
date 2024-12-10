import React from "react";
import './footer.css'
import footerimg1 from '../../assets/Vector.png';
import footerimg2 from '../../assets/Vector (1).png';
import footerimg3 from '../../assets/Vector (2).png';
import footerimg4 from '../../assets/Vector (3).png';
import footerimg5 from '../../assets/Vector (4).png';


function Footer (){
 return(
    <section class="cont-footer">
        
        <div >
            <h2 class="footer-1">Lets work together </h2>

        </div>
     <div class="footer-2">
        <div class="footer-2child">
            <div class="footer-2child1">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </div>
          <div class="footer-3">
             <img class="img1" src={footerimg1} alt="contact1"></img>
             <img class="img2" src={footerimg2} alt="contact2"></img>
             <img class="img3" src={footerimg3} alt="contact3"></img>
             <img class="img4" src={footerimg4} alt="contact4"></img>
             <img class="img5" src={footerimg5} alt="contact5"></img>
          </div>
      </div>
   
    
        <div class="footer-button">
        <div class="footer-button1">
            <div class="footer-text">Name</div>
        </div>
        <div class="footer-button2">
            <div class="footer-text">Email</div>
        </div>
        <div class="footer-button3" >
            <div class="footerbtn-text">Submit</div>
        </div>
        </div>
   
    


    
    </div>




    
    </section>
    )
}

export default Footer;