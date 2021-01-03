import React from "react";
import logo from '../../assets/icons/logo.png';
import home  from '../../assets/icons/home.png';
import shedule from '../../assets/icons/shedule.svg';
import books from '../../assets/icons/books.png';
import letter from '../../assets/icons/letter.png';
import chat  from '../../assets/icons/chat.png';
import calendar  from '../../assets/icons/calendar.png';
import moon  from '../../assets/icons/moon.svg';

import './sidebar.scss';




export const Sidebar = () => {
    const url="";
    function changeContent() {
        
    }




    return(
<div className="sidebar">

    <div className={"sidebar_list"}>
                <div className={"logo"}>
                    <img src={logo} alt=""/>
                </div>
                <ul>
                    <li><img src={home} alt=""/></li>
                    <li><img src={shedule}  alt=""/></li>
                    <li><img src={books}  alt=""/></li>
                    <li><img src={chat}  alt=""/></li>
                    <li><img src={letter}  alt=""/></li>
                    <li><img  src={calendar}  alt=""/></li>
                </ul>
                <div className="footer-logo"><a href={url}><img  src={moon}  alt=""/></a></div>
    </div>


</div>
    )
    }