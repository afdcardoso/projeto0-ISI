const router = require('express').Router();

const teste = require('../database/teste');

router.get('/', async function (req, res){
    var found = await teste.getTeste();
    return res.status(200).send(found);
})

router.post('/', async function (req, res){
    var insert = await teste.postTeste(req.body);
    return res.status(200).send(insert);
})

module.exports = router;