import React from 'react';
import './index.css';
import { Link, withRouter } from 'react-router-dom'
import { globalState, subcribe, dispatch } from './globalState'
import { connect } from 'react-redux'
import { updateNavText } from './actions';


class Header extends React.Component {
    state = {
        navText: '123'
    }
    componentDidMount () {
        subcribe(this.updateState)
    }
    updateState = globalState => {
        this.setState(globalState)
    }

    render () {
        const {location, title} = this.props;
        const {pathname} = location;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={"nav-item" + (pathname === '/' && ' active')}>
                    <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className={"nav-item" + (pathname === '/newpost' && ' active')}>
                    <Link className="nav-link" to='/newpost'>NewPost</Link>
                    </li>
                </ul>
                </div>
                <li> {this.props.navText} </li>
            </nav>
        )
    }
}

const mapDispatchToProps = state => {
    return { 
        navText: state.nav.navText
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Header))