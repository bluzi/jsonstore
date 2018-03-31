const express = require('express');
const crypto = require('crypto');
const database = require('./database');

const router = express.Router();

router.get('/get-link', (req, res) => {
    const seed = Math.random().toString();
    const hash = crypto.createHash('sha256').update(seed).digest('hex');

    return res.send({ link: `https://jsonstore.io/${hash}/` });
});

router.get(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .get(req.path)
        .then(result => res.send({ result }))
        .catch(() => res.send({ result: false }))
);

router.post('/*', (req, res) => 
    database
        .post(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

router.put('/*', (req, res) => 
    database
        .put(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

router.delete('/*', (req, res) => 
    database
        .delete(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

module.exports = router;
