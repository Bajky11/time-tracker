import {Button, Divider, IconButton, Stack, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Stop from '@mui/icons-material/Stop';

var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

export default function Top() {
    return (
        <Grid2 border={"1px solid black"} borderRadius={1} container >
            <Grid2 xs={6}>
                <Stack direction="column" p={1} spacing={1} >
                    <Typography>Dnešní přehled:</Typography>
                    <Divider orientation={"horizontal"}/>
                    <Typography>Název úkolu</Typography>
                    <Typography>Název úkolu</Typography>
                </Stack>
            </Grid2>
            <Grid2 direction={"column"} spacing={1} xs={6} alignItems={"center"} justifyContent={"center"} container>
               <Grid2>
                   <Typography>{datetime}</Typography>
               </Grid2>
                <Grid2>
                    <Stack spacing={1} direction={"row"}>
                        <IconButton><PauseIcon/></IconButton>
                        <IconButton><PlayArrowIcon/></IconButton>
                        <IconButton><Stop/></IconButton>
                    </Stack>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}