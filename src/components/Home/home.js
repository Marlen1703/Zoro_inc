import React from 'react';
import './home.scss';
import {Sidebar} from "../Sidebar/sidebar";
import {Content} from "../Content/content";

export const Home = () => {
    return (
        <div className={"home"}>

            <Sidebar/>


            <Content/>


        </div>


    )
}