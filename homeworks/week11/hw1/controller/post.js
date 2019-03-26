const Post = require('../model/post');

module.exports = {
    new_post: function(req, res) {
        const username = req.session.username
        console.log(req)
        Post.create({
            user_id: req.body.id,
            title: req.body.title,
            content: req.body.content,
            parent_id: req.body.parent_id,
        }).then(() => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
        })
    },
}