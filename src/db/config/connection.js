import { Pool } from 'pg';
import { DATABASE_LOCAL_URL, DATABASE_URL} from '../../constant';

const connectionString =  DATABASE_URL || DATABASE_LOCAL_URL;
console.log(connectionString)


class Db {
    constructor(){
        this.conn = new Pool({ connectionString,ssl: true });
        console.log('database successfully connected')
        return this.conn;
    }

    static getInstance = async () => {
        if (!this.pool) {
            this.pool = new Db()
        }
        return this.pool;
    }

    static creatUsersTable = async () => {
        this.createTableQuery = `
        CREATE TABLE IF NOT EXISTS
        users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(120) NOT NULL,
        surname VARCHAR(120) NOT NULL,
        birth_date VARCHAR(120) NOT NULL,
        attribute TEXt[],
        created_at TIMESTAMP
        )`;

        this.client = await Db.getInstance();
        await this.client.query(`${this.createTableQuery}`);
    }

    static creatUsersAttributeTable = async () => {
        this.createTableQuery = `
        CREATE TABLE IF NOT EXISTS
        attributes(
        id SERIAL PRIMARY KEY,
        color VARCHAR(120) NOT NULL,
        height VARCHAR(120) NOT NULL,
        weight VARCHAR(120) NOT NULL,
        user_id INT REFERENCES users(id)
        );`

        this.client = await Db.getInstance();
        await this.client.query(`${this.createTableQuery}`);
    }
}

export default Db;

