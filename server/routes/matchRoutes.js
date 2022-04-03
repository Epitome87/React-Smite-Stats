import express from 'express';
import { getMatches, getMatch } from '../controllers/matchController.js';

const router = new express.Router();

router.get('/', getMatches).get('/:id', getMatch);

export default router;
