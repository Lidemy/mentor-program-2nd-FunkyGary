import React from 'react';
import TodoItems from './TodoItems';
import TodoFooter from './TodoFooter';

let ENTER_KEY = 13;
let i = 1;


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editing: null,
      nowShowing: 'http://localhost:3000/#/'
    };
  }
  //  更改router
  router = href =>{
    this.setState({nowShowing: href})
  }
  // 輸入項目
  handleNewTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = event.target.value.trim();
    if (val) {
      const todoItem = {
        value: val,
        completed: false,
        id: i,
      };
      const newTodos = this.state.todos.concat(todoItem);
      this.setState({
        todos: newTodos,
        newTodo: '',
      })
      i++
    }
  }
  // 選擇項目編輯
  edit = (todo, input) => {
    this.setState({editing: todo.id}, () => input.focus());
  }
  // 取消編輯項目選擇
  cancel = () => {
    this.setState({editing: null});
  }
  // 更改輸入值
  handleChange = event => {
    this.setState({newTodo: event.target.value})
  }
  // toggle 完成項目
  toggleComcompleted = inputTodo => {
    const newTodos = [].concat(this.state.todos);
    newTodos.find((todo) => {
      return todo.id === inputTodo.id;
    }).completed = !inputTodo.completed;
    this.setState({ todos: newTodos})
  }
  // toggle 所有項目
  toggleAllComcompleted = inputTodo => {
    const newTodos = [].concat(this.state.todos);
    if (newTodos.filter(todo => todo.completed === false).length > 0) {
      newTodos.map((todo) => { todo.completed = true})
    } else {
      newTodos.map((todo) => { todo.completed = false})
    }
    this.setState({ todos: newTodos})
  }
  // 儲存編輯資料
  save = (val ,editingId) => {
    const newTodos = [].concat(this.state.todos);
    newTodos.find((todo) => {
      return todo.id === editingId;
    }).value = val;
    this.setState({ todos: newTodos})
    this.setState({editing: null});
  }
  // 刪除項目
  destroy = inputTodo => {
    const todos = this.state.todos.reduce((arr, todo) => {
      if (todo.id === inputTodo.id) {
        return arr
      } else {
        return arr.concat(todo)
      }
    }, []);
    this.setState({
      todos,
      newTodo: ''
    });
  }
  //刪除已完成項目
  clearCompleted = inputTodo => {
    const todos = this.state.todos.reduce((arr, todo) => {
      if (todo.completed === true) {
        return arr
      } else {
        return arr.concat(todo)
      }
    }, []);
    this.setState({
      todos,
    });
  }

  render() {
    let activeTodoCount = this.state.todos.filter(todo => todo.completed === false).length
    let shownTodos = this.state.todos.filter(todo => {
      switch (this.state.nowShowing) {
        case 'http://localhost:3000/#/active':
          return !todo.completed;
        case 'http://localhost:3000/#/completed':
          return todo.completed;
        default:
          return true;
      }
    }, this)
    return (
      <div>
				<header className="header">
					<h1>todos</h1>
					<input
            type="text"
						className="new-todo"
						placeholder="What needs to be done?"
						value={this.state.newTodo}
            onChange={this.handleChange}
						onKeyDown={this.handleNewTodoKeyDown}
            autoFocus={true}
					/>
				</header>
        <section className="main">
          {this.state.todos.length > 0 &&
          <input
            className="toggle-all"
            type="checkbox"
            checked={activeTodoCount === 0}
            onClick={() => this.toggleAllComcompleted()}
          />}
          <ul className="todo-list">
            {this.state.todos.length > 0 && shownTodos.map((todo) => {
              return (
                <TodoItems
                  key={todo.id}
                  todo={todo}
                  editing={this.state.editing === todo.id}
                  onToggle={this.toggleComcompleted.bind(this, todo)}
                  onCancel={this.cancel}
                  onEdit={this.edit.bind(this, todo)}
                  onDestroy={this.destroy.bind(this, todo)}
                  onSave={this.save}
                />)
              })
            }
          </ul>
        </section>
        {this.state.todos.length > 0 &&
          <TodoFooter
            count={activeTodoCount}
            todos={this.state.todos}
            onClearCompleted={this.clearCompleted}
            nowShowing={this.state.nowShowing}
            onRouter={this.router}
          />
        }
      </div>
    );
  }
}

export default TodoApp;
