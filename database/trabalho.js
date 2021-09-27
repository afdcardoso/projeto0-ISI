const con = require('../lib/config/database');

let trabalho = {};

/**
 * 
 * @returns lista de Trabalhos
 */
trabalho.getTrabalho = async function(){
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM trabalho", (err, result) => {
            if(err){throw err;}
            return resolve(result);
        })
    })
}

trabalho.postTrabalho = async function(data){
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO trabalho (nota, descricao, id_disciplina) VALUES ('" + data.nota + "', '" + 
        data.descricao + "', '" + data.id_disciplina + "');", (err, result) => {
            if(err){throw err;}
            return resolve(result);
        })
    })
}

module.exports = trabalho;
