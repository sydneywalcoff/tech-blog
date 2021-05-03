const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models/index');

// homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'body_content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'content', 'post_id'],
                include: [{
                    model: User,
                    attributes: ['username']
                }]
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;