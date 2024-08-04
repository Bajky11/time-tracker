import {Button, Divider, Stack, Typography} from "@mui/material";
import {TaskList} from "@/app/components/TaskList/TaskList";
import AddIcon from '@mui/icons-material/Add';

export default function Bottom() {
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems={"center"}>
                <Typography>Tasks</Typography>
                <Button variant="contained" size="small"><AddIcon fontSize="small"/></Button>
            </Stack>
            <Divider/>
            <TaskList/>
        </Stack>
    )
}