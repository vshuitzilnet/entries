const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../src/database');


router.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/user/:id', (req, res) => {
    const {id} = req.params; 
    mysqlConnection.query('SELECT * FROM user WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
        res.json(rows[0]);
        } else {
        console.log(err);
        }
    });
})

router.post('/user', (req, res) => {
    const {id, name, username, email, password} = req.body;
    console.log(id, name, username, email, password);
    const query = `
        CALL userAddEdit(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, username, email, password], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'User Saved'});
        } else {
        console.log(err);
        }
    });
});


router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const {name, username, email, password} = req.body;
    
  
    console.log( id, name, username, email, password);
    const query = `
        CALL userAddEdit(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, username, email, password], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'User modificated'});
        } else {
        console.log(err);
        }
    });
});

router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM user WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'User Deleted'});
      } else {
        console.log(err);
      }
    });
});





module.exports = router;