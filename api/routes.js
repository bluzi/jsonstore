const express = require('express');
const crypto = require('crypto');
const database = require('./database');
const { URL } = require('url');

const router = express.Router();

router.get('/get-link', (req, res) => {
    const seed = crypto.randomBytes(64);
    const hash = crypto.createHash('sha256').update(seed).digest('hex');

    const url = new URL(req.get('referer'));
    return res.send({ link: `${url.protocol}//${url.hostname}/${hash}/` });
});

router.get(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .get(req.path)
        .then(result => res.send({ result }))
        .catch(() => res.send({ result: false }))
);

router.post(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .post(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

router.put(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .put(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

router.delete(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .delete(req.path, req.body)
        .then(() => res.send({ result: true }))
        .catch(() => res.send({ result: false }))
);

module.exports = router;
