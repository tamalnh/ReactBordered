import React, { Component } from 'react';

import Movie from './movie'

class Movies extends Component {
    constructor(props) {
        super(props);
        
    }




    render() {
        return (
            <div  >
                {
                    this.props.movies.map(movie => {
                        return  <Movie key={movie.id} movie={movie} handler={this.props.handler}/>
                })}
            </div>
        );
    }
}

export default Movies;