const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.delete('/users/:userId', userController.deleteUserById);
router.put('/users/:userId', userController.updateUserById);

module.exports = router;
