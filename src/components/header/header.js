
import react from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

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
    return(

       <section className="header-cont">
            {/* <div className="logo">
                Logo
            </div> */}
            <NavLink className="logo" to = '/home'>Logo</NavLink>
            <div className="header-right">
                {
                    navitems.map((i) => (
                        // <div className='header-rightitem'>{i}</div>
                        <NavLink className='header-rightitem' to={i.value}>
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