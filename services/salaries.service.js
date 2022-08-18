import { client } from "../configs/database.js";

const getAllSalariesSql = `SELECT * FROM salaries;`

const createSalarySql = `INSERT INTO salaries(employee_id,salary,date)
    VALUES($1,$2,$3);
`


const deleteSalarySql = `DELETE FROM salaries WHERE id = $1`

export function getAllSalaries(){
    return client.query(getAllSalariesSql)
}

export function createSalary(employee_id,salary,date){
    client.query(createSalarySql,[employee_id,salary,date])
}

export function deleteSalary(id){
    client.query(deleteSalarySql,[id])
}