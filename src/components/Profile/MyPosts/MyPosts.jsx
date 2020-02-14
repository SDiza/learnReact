import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            New post
        </div>
        <Post/>
    </div>
};

export default MyPosts