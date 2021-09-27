const con = require('../lib/config/database');

let disciplina = {};


/**
 * 
 * @returns all LINES of TABLE data
 */
disciplina.getData = async function(){
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM data", function(err, result){
            return resolve(result);
        })
    })
}

/**
 * 
 * @returns database STATUS
 */
disciplina.postDisciplina = async function(data){
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO data (tipo, data, id_disciplina, descricao) VALUES ('" + data.tipo + "', '" +
        data.data + "', '" + data.id_disciplina + "', '" + data.descricao + "');", async function(err, result){
            if(err) throw err;
           return resolve(result);
        })
    })
}

module.exports = disciplina;