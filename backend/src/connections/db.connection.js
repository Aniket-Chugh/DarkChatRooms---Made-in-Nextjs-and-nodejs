import mysql from 'mysql2';
import { dbConfig } from './config.connection.js';

const db = mysql.createPool(dbConfig);

db.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL Connection Error:', err);
    } else {
        console.log('Connected to MySQL database!');
        connection.release();
    }
});

export default db.promise();
