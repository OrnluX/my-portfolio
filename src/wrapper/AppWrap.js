import React from "react";
import { NavigationDots} from '../components';


const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <section id={idName} className={`app__container ${classNames}`}>
            <div className="app__wrapper app__flex">
                <Component/>
                <div className="copyright">
                    <p className="secondary-text"> @2022 IVAN TARQUINI</p>
                    <p className="secondary-text"> All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </section>
    );
}

export default AppWrap;