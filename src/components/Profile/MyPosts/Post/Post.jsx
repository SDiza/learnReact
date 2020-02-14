import React from "react";
import style from './Post.module.css';

const Post = () => {
    return <div className={style.posts}>
        <div className={style.item}>
            post1
        </div>
        <div className={style.item}>
            post2
        </div>
    </div>
};

export default Post