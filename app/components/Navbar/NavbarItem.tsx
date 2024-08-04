import {Typography, Box} from "@mui/material";

export default function NavbarItem({label}) {

    return (
        <Box
            borderRadius={1}
            p={1}
            bgcolor={"#F2F2F2"}
            boxShadow={"0px 0px 4px 0px rgba(0,0,0,0.25)"}
            sx={{
                "&:hover": {
                    backgroundColor: "white",
                }
            }}
        >
            <Typography>{label}</Typography>
        </Box>
    )
}