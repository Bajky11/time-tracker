import {Divider, Stack, Typography} from "@mui/material";

export default function Top() {
    return (
        <Stack direction="column" p={1} spacing={1} border={"1px solid black"} borderRadius={1}>
            <Typography>Celkem čas:</Typography>
            <Divider orientation={"horizontal"}/>
            <Typography>Název úkolu</Typography>
            <Typography>Název úkolu</Typography>
        </Stack>
    )
}