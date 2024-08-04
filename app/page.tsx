"use client"

import Index from "@/app/Index";
import {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from "@/utils/firebaseConfig";

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
        <Index/>
    );
}
