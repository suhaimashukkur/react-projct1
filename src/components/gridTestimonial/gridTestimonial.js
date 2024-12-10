import React from "react";
import './gridTestimonial.css'
import grid2imgprofile from '../../assets/Client Image (2).png';
import grid2imgstar from '../../assets/Star.png'

function GridTestimonial (){
    let testimonial = [
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
            
             gridfooter1:"  Gemma Nolen",
             gridfooter2:"Google"
           
        },
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
            
             gridfooter1:"  Gemma Nolen",
             gridfooter2:"Google"
           
        },
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
             
             gridfooter1:"  Gemma Nolen",
             gridfooter2:"Google"
           
        },
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
             
             gridfooter1:"Gemma Nolen",
             gridfooter2:"Google"
           
        },
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
            
             gridfooter1:"  Gemma Nolen",
             gridfooter2:"Google"
           
        },
        {
            content1:"This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com",
             
             gridfooter1:"  Gemma Nolen",
             gridfooter2:"Google"
           
        }
       
    ]
    return(
        <section className="grid-testimonial">
        <div ><h2 className="grid2-head">Testimonial</h2></div>
        <div className="grid2-cont">

          
                {
                    testimonial.map((i) => (
                        <div className="grid2-content">{i.content1}
                  <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                
                <div className="grid-star">
                <img className="img-star"src= {grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                
                
                <div className="grid2-footer">
               {i.gridfooter1}
                </div>
                <div className="grid2-footer2">{i.gridfooter2}</div>
                </div>
           
            </div>
            

            </div>

                    ) )
                }
            
            {/* <div className="grid2-content">
                This is a template Figma file,turned into code using Anima.Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                
                <div className="grid-star">
                <img className="img-star"src= {grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                
                
                <div className="grid2-footer">
                Gemma Nolen
                </div>
                <div className="grid2-footer2">Google</div>
                </div>
           
            </div>
            

            </div>
            <div className="grid2-content">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                <div className="grid-star">
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <div className="grid2-footer">
                Gemma Nolen
                <div className="grid2-footer2">Google</div>
            </div>
        </div>
            </div>
            

            </div>
            <div className="grid2-content">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                <div className="grid-star">
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <div className="grid2-footer">
                Gemma Nolen
                <div className="grid2-footer2">Google</div>
            </div>
        </div>
            </div>
            

            </div>
            <div className="grid2-content">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                <div className="grid-star">
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <div className="grid2-footer">
                Gemma Nolen
                <div className="grid2-footer2">Google</div>
            </div>
        </div>
            </div>
            

            </div>
            <div className="grid2-content">
                This is a template Figma file,turned into code using Anima. Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                <div className="grid-star">
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <div className="grid2-content3"></div>
                <div className="grid2-footer">
                Gemma Nolen
                <div className="grid2-footer2">Google</div>
            </div>
        </div>
            </div>
            

            </div>
            <div className="grid2-content">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          
            <div className="grid2-content2">
                <img className="img-profile" src={grid2imgprofile} alt="profile"></img>
                <div className="grid-star">
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <img className="img-star"src={grid2imgstar} alt="star" />
                <div className="grid2-footer">
                Gemma Nolen
                <div className="grid2-footer2">Google</div>
            </div>
        </div>
            </div>
            

            </div>
             */}
            
        </div>
    </section>
    )
}

export default GridTestimonial;