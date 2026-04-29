import { eq } from "drizzle-orm"
import db from "../config/db"
import { chat, task, user } from "../models"
import { Request, Response } from "express"
import { GET_CHAT_REQUEST, GET_CHAT_RESPONCE } from "@repo/types"

export const getAllChat = async (req: Request<{}, {}, GET_CHAT_REQUEST>, res: Response<GET_CHAT_RESPONCE>) => {
    try {
        const result = await db.select().from(chat).where(eq(user.id, task.id))
        res.status(201).json({ message: "get success", result })
    } catch (error) {
        res.status(500).json({ message: "get success" })
    }
}
// export const createAllChat = async (req: Request<{}, {}, GET_CHAT_REQUEST>, res: Response<GET_CHAT_RESPONCE>) => {
//     try {
//         const { message, taskId, userId } = req.body
//         await db.insert(chat).values({ message, taskId, userId })
//         res.status(201).json({ message: "get success" })
//     } catch (error) {
//         res.status(500).json({ message: "get success" })
//     }
// }
