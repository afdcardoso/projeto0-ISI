var router = require("express").Router();

const data = require('../database/data');


/**
 * 
 * GET FUNCTIONS
 * 
 */
router.get('/', async function(req, res){
    var found = await data.getData();
    res.status(200).send(found);
})

router.get('/:id_disciplina', async function(req, res){
    var found = await data.getDataByDisciplina(req.params.id_disciplina);
    res.status(200).send(found);
})

router.get('/tipo/:tipo', async function(req, res){
    console.log(req.params)
    var found = await data.getDataByTipo(req.params.tipo);
    res.status(200).send(found);
})

/**
 * 
 * POST FUNCTIONS
 * 
 */

router.post('/', async function(req, res){
    var insertion = await data.postData(req.body);
    res.status(200).send();
})

module.exports = router;