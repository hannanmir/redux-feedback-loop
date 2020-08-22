const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback to database
router.post('/', (req, res) => {
    console.log('Posting new feedback:', req.body);
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error posting feedback`, error); 
        res.sendStatus(500);
    });
});

module.exports = router;