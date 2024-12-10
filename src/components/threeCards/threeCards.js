import React from 'react'
import './threeCards.css';
import cardimg1 from '../../assets/Skills Card Icon (2).png'
import cardimg2 from '../../assets/Skills Card Icon.png';
import cardimg3 from '../../assets/Skills Card Icon (1).png'

function ThreeCards (){
    let cards = [{
        cardImage:cardimg1,
        name:"Product Design",
        cardContent:"This is a template Figma file, turned into code using Anima. Learn more at Anima App.com"

    },
    {
        cardImage:cardimg2,
        name:"Product Design",
        cardContent:"This is a template Figma file, turned into code using Anima. Learn more at Anima App.com"


    },
    {
        cardImage:cardimg3,
        name:"Product Design",
        cardContent:"This is a template Figma file, turned into code using Anima. Learn more at Anima App.com"

    }
]
    return(
        <section className="threeCards-section">
        {
        cards.map((i) =>(
                 
                    <div className="threeCards-child">
                    <div className="threeCards-child1">
                <img className="cont4-img" src={i.cardImage} alt="arrow1" />
               
            </div>
            <div className="threeCards-child2">
                <div >
                    <h3 className="threeCards-child2-1">{i.name}</h3>

                </div>
                <div className="threeCards-child2-2">
                    {i.cardContent} 
                </div>
                </div>
                
                </div>
                ))
            }
            
    
           
            {/* <div className="threeCards-child1">
                <img className="cont4-img" src={cardimg1} alt="arrow1" />
               
            </div>
            <div className="threeCards-child2">
                <div >
                    <h3 className="threeCards-child2-1">Product Design</h3>

                </div>
                <div className="threeCards-child2-2">
                    This is a template Figma file, turned into code using Anima. Learn more at
                    AnimaApp.com 
                </div>
            </div>
        </div>
          <div className="threeCards-child">
            <div className="threeCards-child1">
                <img className="cont4-img" src={cardimg2} alt="arrow2" />
            
            </div>
            <div className="threeCards-child2">
            <div >
                <h3 className="threeCards-child2-1">Visual Design</h3>
            </div>
            <div className="threeCards-child2-2">
                This is a template Figma file, turned into code using Anima. Learn more at <div >AnimaApp.com</div>
            </div>
        </div>
        </div>
        <div className="threeCards-child">
            <div className="threeCards-child1">
                <img className="cont4-img" src={cardimg3}  alt="arrow3" />
            </div>
            <div className="threeCards-child2">
                <div >
                    <h3 className="threeCards-child2-1">Art Direction</h3>
                </div>
                <div className="threeCards-child2-2">
                    This is a template Figma file, turned into code using Anima. Learn more at<div>AnimaApp.com</div> 

                </div>
            </div>

        </div> */}
        
     

</section>
   
    )
}


export default ThreeCards;
