import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('getting todos');
});

router.post('/', (_req, res) => {
    res.send('saving todos');
});

export default router;