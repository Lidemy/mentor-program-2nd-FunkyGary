import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

class Post extends Component {
    constructor () {
      super()
      this.state = {
        post:[]
      }
    }
  
    componentDidMount () {
      const {match, changeTitle} = this.props
      axios.get("http://45.55.26.18:3310/posts/" + match.params.id).then(respose => {
        this.setState({
          post: respose.data
        })
        changeTitle(respose.data.title)
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

    deletePost = e => {
      axios.delete("http://45.55.26.18:3310/posts/" + this.state.post.id).then(respose => {
        alert(respose.statusText)
        this.props.history.push("/")
      })
    }
  
    render() {
      const post = this.state.post
      const {match, history} = this.props
      return(
        <div>
          <h3>{post.title}</h3>
          <div>id: {match.params.id}</div>
          <p>{post.body}</p>
          <button className='btn btn-primary' onClick={ () => {
            history.goBack()
          }}>Back</button>
          <Button variant="contained" color="secondary" onClick={this.deletePost}>
            刪除
          </Button>
        </div>
        ) 
    }
  }
  
export default Post