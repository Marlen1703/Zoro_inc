import React from "react";
import './header.css';
import search  from '../../assets/icons/search.svg';
import user  from '../../assets/icons/user.png';



export const Header = () => {
    return (
        <div className={"header"}>
            <div className="header_content">
                <div className="container">
                    <div className="row">
                        <div className="home_icon">
                            <h3>Home</h3>
                        </div>
                        <div className="input_container">
                            <div className="search_form">
                                <div className="search">
                                    <input type="text" placeholder="Search by keywords"/>
                                    <img className={"search_img"} src={search} alt=""/>
                                </div>
                            </div>
                            <div className="profile">
                                <img src={user} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}