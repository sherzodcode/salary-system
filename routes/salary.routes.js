import { Router } from "express";
import { getAllSalaries,createSalary,deleteSalary } from "../services/salaries.service.js";
const router = Router()

router.get('/', async (req,res) =>{
    try{

        const result = await getAllSalaries()
        res.json({
            message: "All Salaries",
            salaries: result.rows
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.post('/', async (req,res) =>{
    try{
        const {employee_id,salary,date} = req.body
        await createSalary(employee_id,salary,date)
        res.json({
            message: "Added"
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.delete('/:id', async (req,res) =>{
    try{
        const id = req.params.id
        await deleteSalary(id)
        res.json({
            message: "Deleted"
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})


export default router