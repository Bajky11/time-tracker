import {Button, Stack, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TaskListItem() {
    return (
        <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={1}
            px={1}
            bgcolor={"#F2F2F2"}
            boxShadow={"0px 0px 4px 0px rgba(0,0,0,0.25)"}
            height={"50px"}
            spacing={2}
        >
            <Typography>Název tasku</Typography>
            <Stack direction="row" spacing={2}>
                <Button size="small" variant="contained"><PlayArrowIcon fontSize="small"/></Button>
                <Button size="small" variant="contained"><EditIcon fontSize="small"/></Button>
                <Button size="small" variant="contained"><DeleteIcon fontSize="small"/></Button>
            </Stack>
        </Stack>
    )
}