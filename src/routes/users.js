var express = require('express');
var router = express.Router();
const { userList, userRegister, userLogin, authenticate, userLogout, userInfo, changePassword, changeProfile} = require('../controllers/user.controller');
const {middleware} = require('../middlewares/jwt.middleware')


/* GET users listing. */
router.get('/', userList);
router.post('/register', userRegister)
router.post('/login', userLogin)
router.post('/changepassword', middleware, changePassword)
router.post('/changeprifile', middleware, changeProfile)
router.get('/authenticate', authenticate)
router.get('/logout', middleware ,userLogout)
router.get('/info', middleware, userInfo)

module.exports = router;
