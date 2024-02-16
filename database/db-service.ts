import {SQLiteDatabase, openDatabase} from 'react-native-sqlite-storage';

const tableName = 'Usuarios';

export interface User {
  id: number;
  nombre: string;
}

export const getDBConnection = async () => {
  return openDatabase({name: 'my-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY,
    nombre TEXT
    );`;

  await db.executeSql(query);
};

export const getUsers = async (db: SQLiteDatabase): Promise<User[]> => {
  try {
    const users: User[] = [];

    const results = await db.executeSql(`SELECT id, nombre FROM ${tableName}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        users.push(result.rows.item(index));
      }
    });

    return users;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get users !!!');
  }
};

export const saveUser = async (db: SQLiteDatabase, user: User) => {
  const insertQuery = `INSERT OR REPLACE INTO ${tableName} (nombre) values (${user.nombre}})`;
};
