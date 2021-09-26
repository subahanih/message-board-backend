const query = require('../database/db.connection');
const { tableColumnSet } = require('../utils/tableColumnSet.utils');

class UserModel {

    tableUser = 'user';

    findOne = async (params) => {
        const { columnSet, values } = tableColumnSet(params)

        let sql = `SELECT * FROM ${this.tableUser}
        WHERE ${columnSet}`;
    
        const result = await query(sql, [...values]);

        return result[0];
    }

}

module.exports = new UserModel;