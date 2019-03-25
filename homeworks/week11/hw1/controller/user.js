const User = require('../model/user');
const Post = require('../model/post');

User.hasMany(Post, { foreignKey: 'user_id' })
Post.belongsTo(User, { foreignKey: 'user_id' })


module.exports = {
    index: function(req, res) {
        const username = req.session.username
        const nickname = req.session.nickname

        if (username) {
            Post.findAll({ include: [User] }).then(posts => {
                res.render('index', {
                    posts,
                    title: 'My posts',
                    username,
                    nickname,
                    id: req.session.user_id
                });
            }).catch(err => {
                console.log(err)
            })
        } else {
            res.render('index', {
                posts: [],
                title: 'Home',
                username,
                nickname
            });
        }
    },
    login: function(req, res) {
        const username = req.session.username
        res.render('login', {
            title: 'login',
            username
        })
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    handleLogin: function(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            }
        }).then(data => {
            if (data) {
                req.session.username = req.body.username
                req.session.nickname = data.nickname
                req.session.user_id = data.id
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        }).catch((err) => {
            res.redirect('/login')
        })
    },
    register: function(req, res) {
        const username = req.session.username
        res.render('register', {
            title: 'Register',
            username
        })
    },
    handleRegister: function(req, res) {
        console.log(req.body)
        User.create({
            nickname: req.body.nickname,
            username: req.body.username,
            password: req.body.password,
        }).then(() => {
            req.session.username = req.body.username
            req.session.nickname = req.body.nickname
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
        })
    },
}