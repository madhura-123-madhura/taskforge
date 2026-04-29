import { Router } from "express"
import { gettask, updatetask } from "../controllers/employee.controller"

const employeerouter = Router()

employeerouter
    .get("/get-task", gettask)
    .put("/update-task/:tid", updatetask)



export default employeerouter