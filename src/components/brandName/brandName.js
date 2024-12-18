import React, { useContext } from "react";
import './brandName.css';
import brandname1 from '../../assets/Group 5334.png';
import brandname2 from '../../assets/image 1 (Traced).png';
import brandname3 from '../../assets/image 5 (Traced).png';
import brandname4 from '../../assets/image 2 (Traced).png';
import brandname5 from '../../assets/image 7 (Traced) (7).png';
import brandname11 from '../../assets/Group 5334 (1).png';
import brandname22 from '../../assets/image 1 (Traced) (1).png';
import brandname33 from '../../assets/image 5 (Traced) (1).png';
import brandname44 from '../../assets/image 2 (Traced) (2).png';
import brandname55 from '../../assets/image 7 (Traced) (49).png';
import { ThemeContext, ThemeUpdateContext } from "../ThemeContext";





function BrandName(){
    const darkTheme = useContext(ThemeContext);
    const setDarkTheme = useContext(ThemeUpdateContext)
    const brand = [

        {
            brandImage:brandname1,
            brandImage1:brandname11
        },{
            brandImage:brandname2,
            brandImage1:brandname22
        },
        {
            brandImage:brandname3,
            brandImage1:brandname33
        },{
            brandImage:brandname4,
            brandImage1:brandname44
        },{
            brandImage:brandname5,
            brandImage1:brandname55
        }
    ]
    return(
      
         <section className={`brandname ${darkTheme?"dark":''}`}>
            
                {
                   
                   brand.map((i) => (
                    <div className="brandname-child">
                    <img className={`brandname-child1 ${darkTheme?"dark":""}`} src={darkTheme?i.brandImage1:i.brandImage} alt="google" />
                   

                    
                    </div>
                   )) 
                  
                }
               

            {/* <img className="brandname-child1" src={brandname1} alt="google" />
            </div>
            <div className="brandname-child">
            <img className="brandname-child2" src={brandname2} alt="tick" />
            </div>
            <div className="brandname-child">
              <img className="brandname-child3" src={brandname3} alt="samsung"/>
            </div>
            <div className="brandname-child">
             <img className="brandname-child4" src={brandname4} alt="apple" />
            </div>
            <div className="brandname-child">
                <img className="brandname-child5" src={brandname5} alt="adidas" />
            </div> */}
          
        </section>
    
    )
}
export default BrandName;