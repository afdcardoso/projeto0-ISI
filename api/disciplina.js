const express = require('express');
const router = express.Router();

const disciplina = require('../database/disciplina');


/**
 * 
 * GET FUNCTIONS
 * 
 */
router.get('/', async function(req, res){
    const data = disciplina.getDisciplina();
    res.json(data);
})

/**
 * 
 * POST FUNCTIONS
 * 
 */
router.post('/', async function(req, res){
    console.log(req.body)
    const found = await disciplina.postDisciplina(req.body);
    console.log(found)
    res.json(found);
})

module.exports = router