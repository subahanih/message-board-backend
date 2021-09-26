const query = require('../database/db.connection');
const { tableColumnSet } = require('../utils/tableColumnSet.utils');

class MessageModel {

    tableMessage = 'message';

    findByChannel = async (params = {}) => {

        let sql = `SELECT * FROM ${this.tableMessage} 
        m INNER JOIN user u ON m.user_id = u.user_id`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = tableColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    create = async ({ channel_id, user_id, message }) => {
        const sql = `INSERT INTO ${this.tableMessage}
        (channel_id, user_id, message) VALUES (?,?,?)`;

        const result = await query(sql, [channel_id, user_id, message]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

}

module.exports = new MessageModel;