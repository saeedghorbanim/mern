import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios'


const OneNinja = () => {

    const {idParam} = useParams();
    const [ninjaInfo, setNinjaInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${idParam}`)
        .then(res=>{
            setNinjaInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])


    return (
        <div>
            <h1>Info about ninja with the id {idParam}</h1>
            <p>Name: {ninjaInfo.name}</p>
            <p>Number of Projects: {ninjaInfo.numProjects}</p>
            <p>Grad Date: {ninjaInfo.graduationDate}</p>
            <p>Veteran: {ninjaInfo.isVeteran? "Is Veteran" : "Not Veteran"}</p>
        </div>
    );
};


export default OneNinja;