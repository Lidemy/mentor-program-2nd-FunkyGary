import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);
registerServiceWorker();
