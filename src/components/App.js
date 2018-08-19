import React, { Component } from 'react'; 
import axios from 'axios';
import Posts from './posts/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    }
  }


  componentDidMount(){ 
    axios.get(BASE_URL)
          .then(res => {
            // console.log(res.data)
            let data = res.data.slice(0, 4);
            let mapData = data.map(post => {
              return {
                ...post,
                selected: false
              }
            }) 
            this.setState({
              posts: mapData
            })
          })
          .catch(err => console.log(err))
  }

  borderHandler = (post) => {
    // console.log(post)
    let index = this.state.posts.findIndex(post1 => {
      return post1.id === post.id;
    })

    let updatedPosts = [...this.state.posts]
      updatedPosts = updatedPosts.map((newPost, newIndex) => {
      if(newIndex === index) {
        newPost.selected = true
      }else{
        newPost.selected = false
      }
      // console.log(newPost)
      return newPost
    })

    this.setState({
      selectedPost: post,
      posts: updatedPosts
    })

  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
         <div className="container">
              <Posts posts={this.state.posts} borderHandler={this.borderHandler} />
         </div>
      </div>
    );
  }
}

export default App;
