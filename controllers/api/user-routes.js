const router = require('express').Router();
const { User } = require('../../models/User');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id', 'username', 'email', 'password']
    })
    .then(dbUserData => res.json(dbUserData));
})

module.exports = router;