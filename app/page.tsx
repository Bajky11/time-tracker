"use client"

import Index from "@/app/Index";
import {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from "@/utils/firebaseConfig";
import Grid2 from "@mui/material/Unstable_Grid2";
import TopNavbar from "@/app/components/TopNavbar/TopNavbar";
import Navbar from "@/app/components/Navbar/Navbar";
import Content from "@/app/components/Content";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const dataList = querySnapshot.docs.map(doc => doc.data());
            setData(dataList);
        };

        fetchData();
    }, []);

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
    );
}
