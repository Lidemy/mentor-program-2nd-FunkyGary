import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  constructor () {
    super()
    this.state = {
      post:[]
    }
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          post : result
        })
      },(error) => {

      }
    )
  }

  render() {
    const post = this.state.post
    return(
      <div>
        <h3>{post.title}</h3>
        <div>userId: {post.userId}</div>
        <p>{post.body}</p>
      </div>
      ) 
  }
}

class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts:[],
      postId: false
    }
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          posts : result
        })
      },(error) => {

      }
    )
  }

  handleClick(id) {
    this.setState({
      postId: id
    }) 
  }

  backhoome() {
    this.setState({
      postId: false
    }) 
  }

  render() {
    const {posts, postId} = this.state
    return(
      <div>
        <h2> Blog posts </h2>
        { 
          postId && <Post id = {postId} /> 
        }
        {
          !postId && <ul className="list-group">
            {posts.map(post => {
              return (
                <li key={post.id} className="list-group-item" onClick={ () => this.handleClick(post.id) }>{post.title}</li>
              )
            })}
          </ul>
        }
        {
          postId && <button type="button" className="btn btn-primary" onClick={ e => this.backhoome(e)}>Back</button>
        }
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
      tab: 'Home'
    }
  }

  handleTabChange(e) {
    e.preventDefault()
    this.setState({
      tab: e.target.innerHTML
    })
  }

  render() {
    const tab = this.state.tab
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Blog</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={"nav-item" + (tab === 'Home' && ' active')}>
                <a className="nav-link" name="home" onClick={ e => this.handleTabChange(e)}>Home</a>
              </li>
              <li className={"nav-item" + (tab === 'About' && ' active')}>
                <a className="nav-link" name="about" onClick={ e => this.handleTabChange(e)}>About</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {tab === 'Home' && <Home/>}
          {tab === 'About' && <About/>}
        </div>
      </div>
    );
  }
}

export default App;
