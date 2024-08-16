//app/pages/Index.tsx
"use client";



export default function Index() {

    return (
        <Grid2 direction="column" container>
            <Grid2>
                <TopNavbar/>
            </Grid2>
            <Grid2 direction="row" bgcolor={"#F2F2F2"} container height={"100vh"}>
                <Grid2 width={200}>
                    <Navbar/>
                </Grid2>
                <Grid2 xs>
                    <Content/>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}