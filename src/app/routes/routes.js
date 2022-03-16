const router = require('express').Router()

const home = require('../controllers/home.controller')

const loginmid = require('../middlewares/login.middleware')

router.get('/', home.index)
router.post('/', home.post)

router.get('/logout', (req, res) => {
	req.session.login = undefined
	return res.redirect('/')
})

router.get('/add-user', loginmid, (req, res) => {
	return res.render('home', {
		login: req.session.login,
		utils: require('../utils/utils'),
		page: req.originalUrl,
	})
})

router.get('*', loginmid, (req, res) => res.redirect('/'))

module.exports = router
