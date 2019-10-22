import Db from '../config/connection';

const pool = Db.getInstance();

class Model {

    constructor(table) {
        this._table = table;
        this.client = null;
       
    }

   insert =  async params => {
     
     const fieldNames = Object.entries(params);
     this.fieldString = '';
     this.valueString = '';
     this.values = [];
     this.count = 1;

     fieldNames.forEach( ([fieldName, fieldValue] ) => {
         this.fieldString += `${fieldName},`;
         this.valueString += `$${this.count},`;
         this.values.push(fieldValue);
         
         this.count += 1;
     });
     this.fieldString = this.fieldString.trim().slice(0, -1);
     this.valueString = this.valueString.trim().slice(0, -1);

     this.query =  `INSERT INTO ${this._table} (${this.fieldString}) VALUES (${this.valueString}) RETURNING *`;
     console.log(this.query)
     console.log(this.values)

     this.client = await pool;
     return this.client.query(`${this.query}`, this.values);



     
 }
}


export default Model;