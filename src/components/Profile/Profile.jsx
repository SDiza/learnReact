import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={style.content}>
        <div>
            <img
                src="https://i0.wp.com/itc.ua/wp-content/uploads/2019/06/Marvel%E2%80%99s-Avengers.jpg?fit=1920%2C1080&quality=100&strip=all&ssl=1"
                alt=""/>
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts/>
    </div>
};

export default Profile