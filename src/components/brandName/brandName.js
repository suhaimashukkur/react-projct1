import React from "react";
import './brandName.css';
import brandname1 from '../../assets/Group 5334.png';
import brandname2 from '../../assets/image 1 (Traced).png';
import brandname3 from '../../assets/image 5 (Traced).png';
import brandname4 from '../../assets/image 2 (Traced).png';
import brandname5 from '../../assets/image 7 (Traced) (7).png';




function BrandName(){
    const brand = [

        {
            brandImage:brandname1
        },{
            brandImage:brandname2
        },
        {
            brandImage:brandname3
        },{
            brandImage:brandname4
        },{
            brandImage:brandname5
        }
    ]
    return(
         <section className="brandname">
            
                {
                   
                   brand.map((i) => (
                    <div className="brandname-child">
                    <img className="brandname-child1" src={i.brandImage} alt="google" />
                    
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