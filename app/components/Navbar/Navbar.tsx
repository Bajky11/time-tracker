import NavbarItem from "@/app/components/Navbar/NavbarItem";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Navbar() {
    return (
        <Grid2 direction="column" bgcolor={"#FFF"} p={1} m={0} spacing={1} height={"100vh"} container>
            <Grid2>
                <NavbarItem label={"Time Tracker"}/>
            </Grid2>
        </Grid2>
    )
}