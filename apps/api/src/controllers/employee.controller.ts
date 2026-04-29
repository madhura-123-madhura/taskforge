import { GET_EMPLOYEE_TASK_REQUEST, GET_EMPLOYEE_TASK_RESPONCE, UPDATE_EMPLOYEE_TASK_REQUEST, UPDATE_EMPLOYEE_TASK_RESPONCE } from "@repo/types"
import { Request, Response } from "express"
import db from "../config/db"
import { task } from "../models"
import { eq } from "drizzle-orm"
interface Authrequest extends Request {
    user: number
}
export const gettask = async (mreq: Request<{}, {}, GET_EMPLOYEE_TASK_REQUEST>, res: Response<GET_EMPLOYEE_TASK_RESPONCE>) => {
    try {
        const req = mreq as Authrequest
        const result = await db.select().from(task).where(eq(task.userId, req.user))
        res.status(200).json({ message: "unable to delete employee", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete employee" })
    }
}
export const updatetask = async (req: Request<{ tid: number }, {}, UPDATE_EMPLOYEE_TASK_REQUEST>, res: Response<UPDATE_EMPLOYEE_TASK_RESPONCE>) => {
    try {

        await db.update(task).set({ complete: true }).where(eq(task.id, req.params.tid))
        res.status(200).json({ message: "task complete" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to delete employee" })
    }
}

