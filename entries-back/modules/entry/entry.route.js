const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../src/database');


router.get('/entry', (req, res) => {
    mysqlConnection.query('SELECT * FROM entry', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/entry/:id', (req, res) => {
    const {id} = req.params; 
    mysqlConnection.query('SELECT * FROM entry WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
        res.json(rows[0]);
        } else {
        console.log(err);
        }
    });
})

router.get('/entry/scroll/:firstid', (req, res) => {
    const {firstid} = req.params;
    const lastid = parseInt(firstid) + 7
    mysqlConnection.query('SELECT * FROM entry WHERE id >= ? AND id <= ?', [firstid, lastid],(err, rows, fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.post('/entry', (req, res) => {
    const {id, title, user, postDate, assigness, workflow, reviewScore, urlImage} = req.body;
    console.log(id, title, user, postDate, assigness, workflow, reviewScore, urlImage);
    const query = `
        CALL entryAddEdit(?, ?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, title, user, postDate, assigness, workflow, reviewScore, urlImage], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'Entry Saved'});
        } else {
        console.log(err);
        }
    });
});


router.put('/entry/:id', (req, res) => {
    const { id } = req.params;
    const {title, user, postDate, assigness, workflow, reviewScore, urlImage} = req.body;
    
  
    console.log( id, title, user, postDate, assigness, workflow, reviewScore, urlImage);
    const query = `
        CALL entryAddEdit(?, ?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, title, user, postDate, assigness, workflow, reviewScore, urlImage], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'Entry modificated'});
        } else {
        console.log(err);
        }
    });
});

router.delete('/entry/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM entry WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Entry Deleted'});
      } else {
        console.log(err);
      }
    });
});





module.exports = router;