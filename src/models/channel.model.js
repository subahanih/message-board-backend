const query = require('../database/db.connection');
const { tableColumnSet } = require('../utils/tableColumnSet.utils');

class ChannelModel {

    tableChannel = 'channel';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableChannel}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = tableColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }
}

module.exports = new ChannelModel;