import {Stack} from "@mui/material";
import Bottom from "@/app/components/Bottom";
import Top from "@/app/components/Top";

export default function Content() {
    return (
        <Stack direction="column" p={2} spacing={4}>
            <Top/>
            <Bottom/>
        </Stack>
    )
}