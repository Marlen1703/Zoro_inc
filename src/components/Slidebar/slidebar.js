import React from 'react';
import "./slidebar.scss";

export const Slidebar = () => {
    return (
        <div className={"slidebar"}>
            <div className="slider">
                <button className="task-slide">
                        Tasks
                </button>
                <button className="event-slide">
                    Events
                </button>
            </div>
        </div>
    );
};


