// const { baseTamplet } = require("./basedTemplet")

import { baseTamplet } from "./basedTemplet"

export const registerTemplet = ({ name, password }: { name: string, password: string }) => {
    const content = `
    <h2>welcom to SKILLHUB</h2>
    <p>Hi, ${name}</p>
    <p>Thank you for choosing SKILLHUB</p>
    <p>password ${password}</p>
    `
    return baseTamplet({
        title: "welcome to taskforge",
        content
    })
}