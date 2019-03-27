import React from 'react';

let ESCAPE_KEY = 27;
let ENTER_KEY = 13;

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.editField = React.createRef();
    this.state = {
      editText: this.props.todo.value
    };
  }
  handleEdit = () => {
    this.props.onEdit(this.editField.current);
  }
  handleChange = event => {
    this.setState({
      editText: event.target.value
    })
  }
	handleKeyDown = event => {
		if (event.which === ESCAPE_KEY) {
			this.setState({
        editText: this.props.todo.value
      });
      this.props.onCancel(event);
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	}
  handleSubmit = event => {
    event.preventDefault();
    let val = event.target.value.trim();
    if (val) {
      this.props.onSave(val ,this.props.todo.id);
      this.setState({
        editText: val,
      });
    } else {
      this.props.onDestroy();
    }
  }
  render() {
    return (
      <li className={this.props.editing ? "editing" : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick={() => this.handleEdit()}>
            {this.props.todo.value}
          </label>
          <button
            className="destroy"
            onClick={this.props.onDestroy}
          />
        </div>
        <input
          ref={this.editField}
          className="edit"
          value={this.state.editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleSubmit}
          // autoFocus={this.props.editing ? true : null}
        />
      </li>
    );
  }
}

export default TodoItems;
