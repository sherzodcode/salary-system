import { client } from "../configs/database.js";

const getAllSql = `SELECT * FROM employees;`

const createSql = `INSERT INTO employees(first_name,last_name,job)
    VALUES($1,$2,$3);
`


const deleteSql = `DELETE FROM employees WHERE id = $1`

export function getAllEmployees(){
    return client.query(getAllSql)
}

export function createEmployee(first_name,last_name,job){
    client.query(createSql,[first_name,last_name,job])
}

export function deleteEmployee(id){
    client.query(deleteSql,[id])
}