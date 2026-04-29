import type admin = require("./admin")

export type GET_EMPLOYEE_TASK_REQUEST = void
export type GET_EMPLOYEE_TASK_RESPONCE = {
    message: string,
    result?: admin.Task[]
}
export type UPDATE_EMPLOYEE_TASK_REQUEST = {
    id: number,
    complete: boolean,
}
export type UPDATE_EMPLOYEE_TASK_RESPONCE = {
    message: string,

}