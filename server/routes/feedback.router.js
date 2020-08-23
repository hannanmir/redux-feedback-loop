const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET to get feedback from database
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting feedbak', error);
        res.sendStatus(500);
    });
})

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

// Delete feedback from database
router.delete('/:id', (req, res) => {
    console.log('In Delete:', req.params.id);
    let queryText = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
        `
    pool.query(queryText, [req.params.id])
        .then( (result) => {
        console.log('Feedback deleted');
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    })
});

// PUT to flag feedback for review
router.put('/flag/:id', (req, res) => {
    console.log("In PUT", req.params.id);
    let queryText = `
        UPDATE "feedback"
        SET "flagged" = true
        WHERE "id" = $1;
        `;
    pool.query(queryText, [req.params.id])
        .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log("error in PUT flag", error);
        res.sendStatus(500);
    });
});

module.exports = router;