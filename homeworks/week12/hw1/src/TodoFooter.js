import React from 'react';

class TodoFooter extends React.Component {
  routerSetting = event => {
    this.props.onRouter(event.target.href)
  }
  render() {
    return (
      <footer className="footer">
				<span className="todo-count">
          <strong>{this.props.count}</strong> item left
				</span>
				<ul className="filters">
          <li>
            <a
              href="#/"
              onClick={this.routerSetting}
              className={this.props.nowShowing === 'http://localhost:3000/#/' ? "selected" : null}>
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              onClick={this.routerSetting}
              className={this.props.nowShowing === 'http://localhost:3000/#/active' ? "selected" : null}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              onClick={this.routerSetting}
              className={this.props.nowShowing === 'http://localhost:3000/#/completed' ? "selected" : null}>
                Completed
            </a>
          </li>
				</ul>
          {this.props.todos.filter( todo => todo.completed === true).length > 0 &&
          <button
            className="clear-completed"
            onClick={() => this.props.onClearCompleted()}
          >
            Clear completed
          </button>}
			</footer>
    );
  }
}

export default TodoFooter;
