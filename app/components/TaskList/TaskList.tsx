import {Stack} from "@mui/material";
import TaskListItem from "@/app/components/TaskList/TaskListItem";

export function TaskList() {
    return (
        <Stack spacing={1.5}>
            <TaskListItem/>
            <TaskListItem/>
            <TaskListItem/>
            <TaskListItem/>
        </Stack>
    )
}