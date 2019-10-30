import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Post extends Component {
    constructor () {
      super()
      this.state = {
        post:[],
        isEditing: false
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

    editPost = e => {
      this.setState({isEditing: true})
    }

    handleInputChange = e => {
      this.setState({
        post : {
          ...this.state.post,
          [e.target.name]: e.target.value
        }
      })
    }

    submitPost = () => {
      const {title, body} = this.state.post
      axios.put('http://45.55.26.18:3310/posts/'+ this.state.post.id, {
        title,
        body,
        author: 'Gary'
      }).then(respose => {
        alert('成功')
        console.log(respose)
        this.setState({isEditing: false})
      }).catch(() => {
        alert('失敗')
      }) 
    }
  
    render() {
      const {post, isEditing} = this.state
      const {match, history} = this.props
      return(
        <div>
          <h3>{post.title}</h3>
          <div>id: {match.params.id}</div>
          {!isEditing && <p>{post.body}</p>}
          {isEditing && <textarea className="form-control" rows="5" name='body' value={post.body} onChange={this.handleInputChange}></textarea>}
          <button className='btn btn-primary' onClick={ () => {
            history.goBack()
          }}>Back</button>
          <Button variant="contained" color="secondary" onClick={this.deletePost}>
            刪除
          </Button>
          {!isEditing && <Button variant="contained" color="primary" onClick={this.editPost}>
            編輯
          </Button>}
          {isEditing && <Button variant="contained" color="primary" onClick={this.submitPost}>
            確認
          </Button>}
        </div>
        ) 
    }
  }
  
export default Post