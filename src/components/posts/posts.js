import React from 'react';
import Post from './post';
const Posts = (props) => {
 
    return (
        <div className="row py-3">
            {props.posts.map(post => {
                return <Post key={post.id} post={post} borderHandler={props.borderHandler} />
            })}
        </div>
    )
    
}

export default Posts;