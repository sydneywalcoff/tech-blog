const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes:['id', 'content', 'post_id', 'user_id'],
    }).then(dbCommentData => res.json(dbCommentData));
});

// get single comment
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes:['id', 'content', 'post_id', 'user_id']
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No Comment found at that id' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => res.status(500).json(err));
});

// add comment
router.post('/', (req, res) => {
    if(req.session) {
        Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(400).json(err));
    }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json(err);
        }
        res.json(dbCommentData)
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;