const database = require('mime-db');
const con = require('../lib/config/database');

let teste = {};

/**
 * 
 * @returns lista de Testes
 */
teste.getTeste = async function(){
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM teste", (err, result) => {
            if(err){throw err;}
            return resolve(result);
        })
    })
}

teste.postTeste = async function(data){
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO teste (nota, descricao, id_disciplina) VALUES ('" + data.nota + "', '" + 
        data.descricao + "', '" + data.id_disciplina + "');", (err, result) => {
            if(err){throw err;}
            return resolve(result);
        })
    })
}

module.exports = teste;