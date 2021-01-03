import React from 'react';
import student_1 from '../../assets/icons/student_chat-1.png';
import student_2 from '../../assets/icons/student_chat-2.png';
import static_files from '../../assets/icons/upload_files.svg';
import voice from '../../assets/icons/voice_icon.svg';


import './classfeed.scss';

export const Classfeed = () => {
    return (
        <div className={"classfeed"}>
            <div className="classfeed-title">
                <p>Class feed</p>
            </div>
            <div className="display-chat">
                <div className=" chat-block chat-display-user-1">
                        <div className="chat-user-1">
                            <div className="user-photo">
                                <img src={student_1} alt=""/>
                            </div>
                            <div className="chat-user-1-message">

                                <div className="chat-user-1-message-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                                </div>

                            </div>

                        </div>

                    <div className="chat-user-time chat-user-1-time">
                        <span>12:30</span>
                    </div>
                </div>
                <div className="chat-date">
                    <div className="line">

                    </div>
                    <div className="chat-date-value">
                        <p>
                            Today
                        </p>
                    </div>

                    <div className="line">

                    </div>
                </div>


                <div className="chat-block chat-display-user-2">
                    <div className="chat-user-2">
                        <div className="user-photo">
                            <img src={student_2} alt=""/>
                        </div>

                        <div className="chat-user-2-message">
                            <div className="message-text chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>
                            <div className="chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>
                            <div className="message-text chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>
                            <div className="message-text chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>
                            <div className="message-text chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>
                            <div className="message-text chat-user-2-message-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus fugiat in nam perspiciatis ullam voluptate. At distinctio, dolores et excepturi expedita harum iure, odio officiis quod soluta tenetur <voluptates className=""></voluptates>
                            </div>


                        </div>


                    </div>

                    <div className="chat-user-time chat-user-2-time">
                        <span>12:30</span>
                    </div>
                </div>







            </div>
            <div className="input-block">
                <div className="input-1">
                    <div className="upload-files">
                        <img src={static_files} alt=""/>
                    </div>
                    <div className="input-text">
                        <input type="text" placeholder="Type new messsage..."/>
                    </div>
                </div>
                <div className="input-2">
                    <div className="input-voice">
                        <img src={voice} alt=""/>
                    </div>
                </div>



            </div>


        </div>
    );
};


