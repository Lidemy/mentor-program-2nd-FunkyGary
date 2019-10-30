import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Post from './Post';
import { globalState, setGlobalState, dispatch } from './globalState'
import { updateNavText } from './actions'
import { connect } from 'react-redux'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts:[],
    }
  }

  componentDidMount () {
    axios.get("http://45.55.26.18:3310/posts").then(respose => {
      this.setState({
        posts: respose.data
      })
    })
  }

  backhoome() {
    this.setState({
      postId: false
    }) 
  }

  render() {
    const {posts} = this.state
    return(
      <div>
        <h2> Blog posts </h2>
          <ul className="list-group">
            {posts.map(post => {
              return (
                <li key={post.id} className="list-group-item" >
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              )
            })}
          </ul>
      </div>
      ) 
  }
}

connect(null, mapDispatchToProps)(Home)

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {
    const {title, body} = this.state  
    axios.post('http://45.55.26.18:3310/posts', {
      title,
      body,
      author: 'Gary'
    }).then(() => {
      alert('成功')
    }).catch(() => {
      alert('失敗')
    }) 
  }

  render() {
    const {title, body} = this.state  
    return ( 
      <div className='newpost'>
        <div class="form-group">
          <label for="usr">Title:</label>
          <input type="text" class="form-control" name='title' value={title} onChange={this.handleInputChange}/>
        </div>
        <div class="form-group">
          <label for="pwd">Body:</label>
          <textarea class="form-control" rows="5" name='body' value={body}  onChange={this.handleInputChange}></textarea>
        </div>
        <button class="btn btn-primary" type="submit" onClick={this.onSubmit}>Submit</button>
        <button onClick={() => dispatch(updateNavText(Math.random())) }> click me </button>
      </div>
    ) 
  }
}

const mapDispatchToProps = dispatch => {
  return {
      updateNav: text => dispatch(updateNavText(Text))
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleTabChange(e) {
    e.preventDefault()
    this.setState({
      tab: e.target.innerHTML
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route path='/newpost' component={NewPost} />
            <Route path='/posts/:id' component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
