import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: {
                ...this.props.post
            }
         };
    }
    render() {
        // console.log(this.state.post)
        return (
            <div 
                style={{border: this.state.post.selected ? '1px solid green' : 'none'}}
                onClick={() => this.props.borderHandler(this.state.post)}
                className="col-sm-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="display-5"> {this.state.post.title} </h4>
                        <p className="small">{this.state.post.body}</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Post;