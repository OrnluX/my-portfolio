import React, {useState} from "react";
import {HiMenuAlt1, HiX,} from 'react-icons/hi';
import {DiNodejsSmall} from 'react-icons/di'
import {motion} from 'framer-motion';

import './Navbar.scss';
// import {images} from '../../constants';

function Navbar () {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="logo-container">
                {/* <img src={images.logo} alt="logo" /> */}
                <h3>
                    <DiNodejsSmall className="logo-icon"></DiNodejsSmall>
                    Ivan<span>Tarquini</span>
                   
                    </h3>
            </div>
            <ul className="app__navbar-links">
                {['home', 'about','work','skills','contact'].map((item) =>(
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}> {item} </a>
                    </li>
                ))}
            </ul>
            
            <div className="app__navbar-menu">
                <HiMenuAlt1 onClick={()=> setToggle(true)} />
                {toggle && (
                    <motion.div  
                    whileInView={{x: [300, 0]}}
                    transition={{duration: 0.7, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                        {['home', 'about','work','skills','contact'].map((item) =>(
                            <li className="app__flex p-text" key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
        );
}

export default Navbar;