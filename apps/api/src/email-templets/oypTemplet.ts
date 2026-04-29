// const { baseTamplet } = require("./basedTemplet")

import { baseTamplet } from "./basedTemplet"

// const { baseTamplet } = require("./basedTemplet")

export const otpTemplet = ({ name, otp, min, sec }: { name: string, otp: string, min: string, sec: string }) => {
    const content = `
    <h2>OTP</h2>
    <p>Hi, ${name}</p>
    <p>please use following OTP</p>
    <h1>${otp}</h1>
    <p>This OTP will expires in ${min} min (${sec} seconds)</p>
    <p>If you have not request to reset password ,please ignore this link</p>
    `
    return baseTamplet({
        title: "",
        content
    })
}