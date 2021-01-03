import {Header} from '../Header/header';
import './content.scss';
import '../../assets/style/main.scss'
import {Shedule} from '../Shedule/shedule';
import {Classfeed} from '../ClassFeed/classfeeed';
import {Calendar} from "../Calendar/calendar";
import {Slidebar} from "../Slidebar/slidebar";

export const Content = () => {
    return (
        <div className={"content"}>
            <Header/>
            <div className="sub-content">

                <div className="first-half">
                    <Shedule/>
                    <Classfeed/>
                </div>

                <div className="second-half">
                    <Calendar/>
                    <Slidebar/>
                </div>



            </div>


        </div>

    );
};


