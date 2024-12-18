import React, { useContext } from "react";
import './gridLatestWork.css'
import gridimg1 from '../../assets/Image.png';
import gridimg2 from '../../assets/Image (1).png';
import gridimg3 from '../../assets/Image (2).png';
import gridimg4 from '../../assets/Image (3).png';
import gridimg5 from '../../assets/Image (4).png';
import gridimg6 from '../../assets/Image (5).png';

import { ThemeContext, ThemeUpdateContext } from "../ThemeContext";

function GridLatestWork (){
    const darkTheme = useContext(ThemeContext);
const setDarkTheme = useContext(ThemeUpdateContext);
    let gridImage = [
        {
            image:gridimg1,
            title:"desktop",
            subtitle:"UI-Form"
        },{
            image:gridimg2,
            title:"monitor",
            subtitle:"UI,design"
        },
        {
            image:gridimg3,
            title:"desktop",
            subtitle:"UI-Form"
        },
        {
            image:gridimg4,
            title:"desktop",
            subtitle:"UI-Form"
        },
        {
            image:gridimg5,
            title:"desktop",
            subtitle:"UI-Form"
        },
        {
            image:gridimg6,
            title:"desktop",
            subtitle:"UI-Form"
        }
    ]
    return(
    <section className={`grid-latestwork ${darkTheme?"dark1":""}`}>
   
       <h2 className={`grid-heading ${darkTheme?"dark1":''}`}> Latest work</h2>
       <div className="grid-cont">
   

    {
                gridImage.map((i) =>(
                <>
               
                <div >
                    <img className="img" src= {i.image} alt="grid1" />
             <div className={`grid-title${darkTheme?"dark":''}`}>{i.title}</div>
            <div className="grid-subtitle">{i.subtitle}</div> 
            </div>
            
            </>
            

                ))
            
           
            }  
            
       
        {/* <div className="gridtitle-cont"> */}
           
           
            
        </div>
            </section>
    )
}
             {/* <img className="img" src= {gridimg1} alt="grid1" />
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
        </div>
    
    
    <div >
        <img className="img" src={gridimg2} alt="grid2" />
        <div className="title-cont">
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
        </div>

    <div >
        <img className="img" src={gridimg3} alt="grid3" />
        <div className="title-cont">
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
        </div>

    <div >
        <img className="img" src={gridimg4} alt="grid4" />
    
        <div className="title-cont">
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
        </div>
    <div>
        <img className="img" src={gridimg5} alt="grid5" />
        <div className="title-cont">
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
        </div>
    <div >
        <img className="img" src={gridimg6} alt="grid6" />
        <div className="title-cont">
            <div className="grid-title">Project-Title</div>
            <div className="grid-subtitle">Art-Direction</div>
        </div> 
    </div>
        
</div> */}

    


export default GridLatestWork;