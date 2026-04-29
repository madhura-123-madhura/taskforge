import { APP_URL } from "@/config/env"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GET_EMPLOYEE_TASK_RESPONCE, UPDATE_EMPLOYEE_TASK_REQUEST, UPDATE_EMPLOYEE_TASK_RESPONCE, UPDATE_TASK_REQUEST, UPDATE_TASK_RESPONSE } from "@repo/types"

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}/api/employee`, credentials: "include" }),
    tagTypes: ["task"],
    endpoints: (builder) => {
        return {
            getTask: builder.query<GET_EMPLOYEE_TASK_RESPONCE, void>({
                query: () => {
                    return {
                        url: "/get-task",
                        method: "GET"
                    }
                },
                providesTags: ["task"]
            }),
            updateTask: builder.mutation<UPDATE_EMPLOYEE_TASK_RESPONCE, UPDATE_EMPLOYEE_TASK_REQUEST>({
                query: taskData => {
                    return {
                        url: "/update-task/" + taskData.id,
                        method: "PUT",
                        body: taskData
                    }
                },
                invalidatesTags: ["task"]
            }),

        }
    }
})

export const { useGetTaskQuery, useUpdateTaskMutation } = employeeApi
