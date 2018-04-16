const express = require('express');
const crypto = require('crypto');
const database = require('./database');
const { URL } = require('url');

function checkContentType(req, res, next) {
    if (!req.is('application/json')) {
        return res.status(400).send({ ok: false, error: "Bad request" });
    }

    next();
}

const router = express.Router();

router.get('/get-token', (req, res) => {
    const seed = crypto.randomBytes(64);
    const hash = crypto.createHash('sha256').update(seed).digest('hex');
    return res.send({ token: hash });
});

router.get(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .get(req.path)
        .then(result => res.status(200).send({ result, ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

router.post(/^\/[0-9a-z]{64}/, checkContentType, (req, res) =>
    database
        .post(req.path, req.body)
        .then(() => res.status(201).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
)

router.put(/^\/[0-9a-z]{64}/, checkContentType, (req, res) =>
    database
        .put(req.path, req.body)
        .then(() => res.status(200).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

router.delete(/^\/[0-9a-z]{64}/, (req, res) =>
    database
        .delete(req.path, req.body)
        .then(() => res.status(200).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

module.exports = router;
