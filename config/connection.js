import mysql from 'mysql2';
import config from './index.js';

const pool = mysql.createPool(config.mysql);

function query(sqlStr, values) {
    
    return new Promise((res, rej) => { 

        pool.query(sqlStr, values, (err, results) => { 

            if (err) {
                rej(err);
            } else {
                res(results);
            }

        });

    });
}

export default query;