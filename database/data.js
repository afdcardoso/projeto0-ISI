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
 * @param {INT} id_disciplina ID da Disciplina em questao
 * @returns Datas da Disciplina especificada
 */
disciplina.getDataByDisciplina = async function(id_disciplina){
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM data WHERE id_disciplina = " + id_disciplina, function(err, result){
            return resolve(result);
        })
    })
}

/**
 * 
 * @param {ENUM} tipo Tipo de Avaliacao a decorrer
 * @returns Datas do mesmo Tipo especificado
 */
disciplina.getDataByTipo = async function(tipo){
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM data WHERE tipo = '" + tipo + "';", function(err, result){
            if(err){console.log(err);}
            return resolve(result);
        })
    })
}

/**
 * 
 * @returns database STATUS
 */
disciplina.postData = async function(data){
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO data (tipo, data, id_disciplina, descricao) VALUES ('" + data.tipo + "', '" +
        data.data + "', '" + data.id_disciplina + "', '" + data.descricao + "');", async function(err, result){
            if(err) throw err;
           return resolve(result);
        })
    })
}

module.exports = disciplina;