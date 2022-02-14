const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser); // ПЕРЕДАТЬ БЕЗ ВЫЗОВА, БЕЗ СКОБОК ()
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.getUpdateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;