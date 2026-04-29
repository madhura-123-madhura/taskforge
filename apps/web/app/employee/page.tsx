"use client"

import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetTaskQuery, useUpdateTaskMutation } from '@/redux/apis/employee.api'
import React from 'react'
import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { UPDATE_EMPLOYEE_TASK_REQUEST } from "@repo/types"
import { toast } from "sonner"

const page = () => {
  return <>
    <TaskTable />

  </>
}

const TaskTable = () => {
  const { data } = useGetTaskQuery()
  const [update] = useUpdateTaskMutation()
  const handleUpdate = async (userData: UPDATE_EMPLOYEE_TASK_REQUEST) => {
    try {
      await update(userData).unwrap()
      toast.success("completed")
    } catch (error) {
      toast.error("unabel to complete")
    }
  }
  return <>
    {
      data && <Table>

        <TableHeader>
          <TableRow>

            <TableHead>id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>description</TableHead>
            <TableHead>profile Img</TableHead>
            <TableHead>dueDate</TableHead>
            <TableHead>complete Date</TableHead>
            <TableHead>complete</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.result?.map(item => <TableRow>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="font-medium">{item.desc}</TableCell>
              <TableCell className="font-medium">
                {item.hero && <img src={item.hero} height={50} width={50} alt="" />}
              </TableCell>
              <TableCell className="font-medium">{item.due?.toString()}</TableCell>
              <TableCell className="font-medium">{item.completeDate?.toString()}</TableCell>
              <TableCell className="font-medium">
                {
                  item.complete
                    ? <Button onClick={() => handleUpdate({ id: item.id, complete: false })}>Mark as complete</Button>
                    : <Button onClick={() => handleUpdate({ id: item.id, complete: true })}>Mark as pending</Button>
                }
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>)
          }


        </TableBody>
      </Table >
    }
  </>
}

const Chat = () => {
  return <>
    <SidebarProvider>
      <Sidebar variant="inset" />
      <SidebarInset>
        <main></main>
      </SidebarInset>
    </SidebarProvider>
  </>
}

export default page