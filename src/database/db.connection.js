const dotenv = require('dotenv');
dotenv.config();
const mysql2 = require('mysql2');

class DBConnection {
    constructor() {
        this.db = mysql2.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });

        this.checkConnection();
    }

    checkConnection() {
        this.db.getConnection((err, connection) => {
            if (err) {
                console.error('Error while connecting to Database.');
            }
            if (connection) {
                connection.release();
                console.log('Connected to MYSQL!');
            }
            return
        });
    }

    query = async (sql, values) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            }
            this.db.execute(sql, values, callback);
        }).catch(err => {
            throw err;
        });
    }
}

module.exports = new DBConnection().query;