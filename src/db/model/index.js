import Db from '../config/connection';

const pool = Db.getInstance();

class Model {

    constructor(table) {
        this._table = table;
        this.client = null;
        this.fieldString = '';
        this.fieldValue = '';
        this.values = [];
        this.valueString ='';
    }

   insert =  async params => {
   
     const fieldNames = Object.entries(params);
     this.count = 1;

     fieldNames.forEach( ([ fieldName, fieldValue ] ) => {
         this.fieldString += `${fieldName},`;
         this.valueString += `$${this.count},`;
         this.values.push(fieldValue);
         this.count += 1;
     });
    
     this.fieldString = this.fieldString.trim().slice(0, -1);
     this.valueString = this.valueString.trim().slice(0, -1);
     this.query =  `INSERT INTO ${this._table} (${this.fieldString}) VALUES (${this.valueString}) RETURNING *`;
     this.client = await pool;
     return this.client.query(`${this.query}`, this.values);
    
    }

    update = async (userId, params) => {
        this.fieldKey = Object.entries(params);
        this.count = 1;
        this.userId = userId;
       

        this.fieldKey.forEach(([key, value]) => {
            this.fieldString += `${key} = $${this.count},`;
            this.count += 1;
            this.values.push(value);
        });

        this.fieldString = this.fieldString.trimEnd().slice(0, -1);
        this.sql = `UPDATE ${this._table} SET ${this.fieldString} WHERE id  = ${this.userId} RETURNING *`;
        const client = await pool;
        
        return client.query(`${this.sql}`, this.values);
    }

    delete = async userId => {
        this.id = userId
        this.sql = `DELETE FROM ${this._table} WHERE id= $1 RETURNING *`;
        const client = await pool;
       
        return client.query(`${this.sql}`, [this.id]);
    }

    getAllUsers = async () => {
       
        this.sql = `SELECT * FROM ${this._table}`;
        const client = await pool;
        return client.query(`${this.sql}`);
    }
}


export default Model;