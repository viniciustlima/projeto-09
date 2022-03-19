const router = require('express').Router()

const home = require('../controllers/home.controller.js')
const user = require('../controllers/user.controller.js')

const loginM = require('../middlewares/login.middleware')
const permissionM = require('../middlewares/permission.middleware')

router.get('/', home.index)
router.post('/', home.post)
router.get('/logout', home.logout)

router.get('/edit-user', loginM, user.editUserI)
router.post('/edit-user', loginM, user.editUserP)

router.get('/add-user', loginM, permissionM, user.addUserI)
router.post('/add-user', loginM, permissionM, user.addUserP)

router.get('*', loginM, (_req, res) => res.redirect('/'))

module.exports = router
