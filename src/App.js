import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movies from './movies'

class App extends Component {

  constructor(props){
    super(props) 


      this.state = {
        movies: [  ]
      } 
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => {
            let dataslice = data.slice(0, 4)

              let dataMaped = dataslice.map(item => {
                return {
                  ...item,
                  slected: false
                }
              })

              this.setState({
                movies: dataMaped
              })

          })
          .catch(error => console.log(error))
  }
  

  handler = (slectedMovie) => { 

    let index = this.state.movies.findIndex(movie => {
       return movie.id === slectedMovie.id
       
    })
    // console.log(index)

    let updateMovies = [...this.state.movies]
    updateMovies = updateMovies.map((updatedMovie, updatedIndex) => {
          
            if(updatedIndex === index){
              updatedMovie.slected = true;
              // console.log(updatedMovie)
            }else{
              updatedMovie.slected = false;
            }

            return updatedMovie

        })

        
        this.setState({
          movies: updateMovies
        })

}




  render() {
    // console.log(this.state.movies)
    return (
      <div className="App">
             <Movies movies={this.state.movies} handler={this.handler} />
      </div>
    );
  }
}

export default App;
