import React from 'react';
import './calendar.scss'
export const Calendar = () => {
    const today = new Date();
    const date = today.getDate()+'.'+today.getMonth()+'.'+today.getFullYear();
    return (

            <div className={"calendar"}>
                <div className="calendar-block">
                    <div className="calendar-time">
                        <span>
                            12.59
                        </span>
                    </div>
                    <div className="calendar-date">
                        <span>
                            Thursday,29 October 2020
                        </span>
                    </div>
                </div>
            </div>
    );
};