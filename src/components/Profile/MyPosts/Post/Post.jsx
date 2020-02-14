import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw"
                alt=""/>
            {props.message}
            <div>
                <span>Like: {props.likes}</span>
            </div>
        </div>
    )
};

export default Post