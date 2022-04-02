import express from 'express';
import auth from '../middlewares/auth.js';
import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  login,
  logout,
} from '../controllers/userController.js';

const router = new express.Router();

router
  .get('/me', auth, getUser)
  .post('/', createUser)
  .delete('/me', auth, deleteUser)
  .patch('/me', auth, updateUser)
  .post('/login', login)
  .post('/logout', auth, logout);

export default router;
