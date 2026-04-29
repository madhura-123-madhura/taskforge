export type GET_CHAT_REQUEST = {
    message: string
    userId: string
    taskId: string
}
export type GET_CHAT_RESPONCE = {
    message: string
    result?: {
        message: string | null
    }[]
}
export type CREATE_CHAT_REQUEST = {
    message: string
}
export type CREATE_CHAT_RESPONCE = {
    message: string
}