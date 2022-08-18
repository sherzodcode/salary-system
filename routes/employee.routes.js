import { Router } from "express";
import { createEmployee, deleteEmployee, getAllEmployees } from "../services/employee.service.js";
const router = Router()

router.get('/' , async (req,res) => {
    try{

        const result = await getAllEmployees()


        res.json({
            message: "All Employees",
            employees: result.rows
        })
    }catch(err){
        res.json({
            message:err
        })
    }
})

router.post('/' , async (req,res) => {
    try{
        const {first_name,last_name,job} = req.body
        await createEmployee(first_name,last_name,job)

        res.json({
            message: "Added"
        })
    }catch(err){
        res.json({
            message:err
        })
    }
})

router.delete('/:id' , async (req,res) => {
    try{
        const id = req.params.id

        await deleteEmployee(id)
        res.json({
            message:"Deleted"
        })
    }catch(err){
        res.json({
            message:err
        })
    }
})

export default router