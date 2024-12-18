
import react, { useContext } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { ThemeContext, updateTheme, useTheme } from '../ThemeContext';
import { ThemeUpdateContext } from '../ThemeContext';


function Header(){
    let navitems = [{id:1,
        name:"About",
    value:'/about'},{
        id:2,
        name:"Work",
        value:'/work',
    },
    {
        id:3,
        name:"Contact",
    value:'/contact'
},


];
const darkTheme = useContext(ThemeContext);
const setDarkTheme = useContext(ThemeUpdateContext)
    return(

       <section className={`header-cont ${darkTheme?"dark":''}`}>
            {/* <div className="logo">
                Logo
            </div> */}
            <NavLink className={`logo ${darkTheme?"dark":''}`} to = '/home'>Logo</NavLink>
            <div className="header-right">
            <button onClick={setDarkTheme}>^</button>
                {
                    navitems.map((i) => (
                        // <div className='header-rightitem'>{i}</div>
                       
                        <NavLink className={`header-rightitem ${darkTheme?"dark":''}`} to={i.value}>
                            {i.name}
                        </NavLink>
                    ))
                }



                {/* <div className="header-rightitem">
                    About
                </div>
                <div className="header-rightitem">
                    Work
                </div>
                <div className="header-rightitem">
                    Contact
                </div> */
                }
            </div>

       
        </section>
    )
}
export default Header;