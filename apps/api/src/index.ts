import express from "express"
import cors from "cors"
import authRouts from './routes/auth.routes'
import adminRouts from './routes/admin.routes'
import { FRONTEND_URL, NODE_ENV, PRODUCTION } from "./config/env"
import cookieParser from "cookie-parser"
import { protect } from "./moddlewares/auth.middleware"
import employeerouter from "./routes/employee.routes"
const app = express()

app.use(cookieParser())

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

app.use("/api/auth", authRouts)
app.use("/api/admin", protect("admin"), adminRouts)
app.use("/api/employee", protect("employee"), employeerouter)

app.get("/", (req, res) => {
    res.json({ message: "API running successfully" })
})
const PORT = 5000
if (NODE_ENV !== PRODUCTION) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })

}



export default app