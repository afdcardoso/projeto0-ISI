var express = router("express");
var router = express.Router();

router.get('/', async function(req, res){
    res.status(200).send("done");
})