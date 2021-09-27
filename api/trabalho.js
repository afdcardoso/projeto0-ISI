const router = require('express').Router();

const trabalho = require('../database/trabalho');

router.get('/', async function (req, res){
    var found = await trabalho.getTrabalho();
    return res.status(200).send(found);
})

router.post('/', async function (req, res){
    var insert = await trabalho.postTrabalho(req.body);
    return res.status(200).send(insert);
})

module.exports = router;