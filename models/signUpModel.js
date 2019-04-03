let connection = require('../settings/db/dbConnection')

module.exports = (data) => {
    let query = ``;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, rows) => {
            if (rows == undefined || rows == ''){
                reject(new Error('Error rows is undefined'))
            }
            else{
                resolve(rows)
            }
        });
    });   
}