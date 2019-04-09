import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

class Post extends Component {
    constructor () {
      super()
      this.state = {
        post:[]
      }
    }
  
    componentDidMount () {
      const {match} = this.props
      axios.get("https://jsonplaceholder.typicode.com/posts/" + match.params.id).then(respose => {
        this.setState({
          post: respose.data
        })
      })
      // fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      //   .then(res => res.json())
      //   .then((result) => {
      //     this.setState({
      //       post : result
      //     })
      //   },(error) => {
  
      //   }
      // )
    }
  
    render() {
      const post = this.state.post
      const {match, history} = this.props
      return(
        <div>
          <h3>{post.title}</h3>
          <div>id: {match.params.id}</div>
          <div>userId: {post.userId}</div>
          <p>{post.body}</p>
          <button className='btn btn-primary' onClick={ () => {
            history.goBack()
          }}>Back</button>
        </div>
        ) 
    }
  }
  
export default Post