import React from "react";
import {motion} from 'framer-motion';
import { GrGithub } from "react-icons/gr";
import { TfiInstagram, TfiEmail, TfiLinkedin } from "react-icons/tfi";
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

function Header () {
    return (
    <div className="app__header app__flex">
        <motion.div
         whileInView={{x: [-100,0], opacity:[0,1]}}
         transition={{duration: 0.7}}
         className='app__header-info'
         > 
         <div className="social__icons">
            <a className="social__icons-icon" href="https://www.linkedin.com/in/sergio-ivan-tarquini/">
                <TfiLinkedin ></TfiLinkedin>
            </a>
            <a href="https://github.com/OrnluX" className="social__icons-icon">
                <GrGithub></GrGithub>
            </a>
            <a href="mailto:ivantarquini91@gmail.com" className="social__icons-icon">
                <TfiEmail></TfiEmail>
            </a>
            <a href="https://www.instagram.com/l.enfant.sauvage_/" className="social__icons-icon">
                <TfiInstagram></TfiInstagram>
            </a>
         </div>
         <div className="app__header-badge">
            <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{marginLeft: 20}}>
                    <p className="p-text">Hey there! I'm</p>
                    <h1>Ivan</h1>
                </div>
            </div>

            <div className="tag-cmp app__flex">
                <p className="p-text">👨‍💻 Front-end Developer</p>
                <p className="p-text">🚀 Freelancer</p>
            </div>
         </div>
        </motion.div >

        <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.7, delayChildren:0.7}}
            className='app__header-img'
            >
                <img src={images.profile} alt="profile-bg" />
                <motion.img 
                whileInView={{scale: [0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                src={images.circle}
                alt='profile-circle'
                className='overlay_circle'
                />
        </motion.div>

        <motion.div 
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='app__header-circles'
        >
            {[images.sass, images.react, images.node].map((circle, index)=>(
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="circle" />
                </div>
            ))}
        </motion.div>

    </div>
    );
}

export default AppWrap(Header, 'home','');