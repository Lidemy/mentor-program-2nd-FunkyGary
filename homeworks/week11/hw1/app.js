const express = require('express');
const path = require('path');
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express();

const routes = require('./routes/index');
const users = require('./routes/users'); //引入檔案

// controller
const userController = require('./controller/user')
const postController = require('./controller/post')


app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 600000 },
    resave: true,
    saveUninitialized: true
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// css file
app.use('/src', express.static(__dirname + '/src'));

// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', userController.index);
app.get('/login', userController.login);
app.post('/login', userController.handleLogin);
app.get('/register', userController.register);
app.post('/register', userController.handleRegister);

app.post('/new_post', postController.new_post);

app.get('/logout', userController.logout);



app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})