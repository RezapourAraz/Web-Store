import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "@firebase/firestore";

// components
import Header from '../components/Header';

const Landing = () => {

    // const [ products, setProducts ] = useState([]);
    // const productCollectionRef = collection(db, "products");

    // useEffect(() => {

    //     const getData = async () => {
    //         const data = await getDocs(productCollectionRef);
    //         setProducts(data.docs.map((doc) => ({...doc.data()})));
    //     }
    //     getData();
    // },[])
    
    return (
        <>
            <Header />
            <div>
                
            </div>
        </>
    );
};

export default Landing;