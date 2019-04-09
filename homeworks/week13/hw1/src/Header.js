import React from 'react';
import './index.css';
import {Link, withRouter} from 'react-router-dom';

class Header extends React.Component {
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
            </nav>
        )
    }
}
export default withRouter(Header)