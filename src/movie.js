import React, { Component } from 'react'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            movie: this.props.movie, 
        };
 
    }

  


    render() {
        console.log(this.state.movie)
        // console.log(this.props)
        return (
            <div style={{border: this.state.movie.slected === true ? '1px solid red': 'none'}}
            onClick={() => this.props.handler(this.state.movie)}>
                <h2>{this.state.movie.title}</h2>
            </div>
        );
    }
}

export default Movie;