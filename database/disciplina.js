const con = require('../lib/config/database');

let disciplina = {};


/**
 * 
 * @returns all LINES of TABLE disciplina
 */
disciplina.getDisciplina = async function(){ 
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM disciplina", function(err, result){
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
        con.query("INSERT INTO disciplina (nome) VALUES ('" + data.nome + "');", async function(err, result){
            //if(err) console.error({err});
            if(err.code == 'ER_DUP_ENTRY'){return resolve({err: "Duplicate Entry"})}
           return resolve(result);
        })
    })
}

module.exports = disciplina;