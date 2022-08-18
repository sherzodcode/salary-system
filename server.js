import express from  "express"
import cors from "cors"
import employeeRoutes from "./routes/employee.routes.js"
import salaryRoutes from "./routes/salary.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( '/employee',employeeRoutes)
app.use('/salaries', salaryRoutes)

app.listen(8080,()=> {
    console.log("server is running");
})

