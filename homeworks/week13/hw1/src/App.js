import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Post from './Post';
import {CHANGE_TITLE} from './actionTypes'; 


class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts:[],
    }
  }

  componentDidMount () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(respose => {
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

const About = () => {
  return (
    <div>I am about</div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Blog'
    }
  }

  render() {
    const {title} = this.state
    return (
      <Router>
        <div className="App">
          <Header title={title} />
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/posts/:id' render={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
