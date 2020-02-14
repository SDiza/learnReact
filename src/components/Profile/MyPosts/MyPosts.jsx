import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            <textarea></textarea>
            <button>add post</button>
        </div>
        <div className={style.posts}>
            <Post message='how are you?' likes='15'/>
            <Post message="it's fine!" likes='25'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
};

export default MyPosts