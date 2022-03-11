const router = require('express').Router()

const home = require('../controllers/home.controller')

router.get('/', home.index)
router.post('/', home.post)

router.get('/logout', (req, res) => { req.session.login = undefined; return res.redirect('/') })

module.exports = router
