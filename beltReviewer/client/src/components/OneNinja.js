import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const OneNinja = () => {

    const {idParam} = useParams();
    const [ninjaInfo, setNinjaInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${idParam}`)
        .then(res=>{
            setNinjaInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])

    const deleteClickHandler = ()=>{
        console.log("trying to delete ninja with this id-->", ninjaInfo._id )
        axios.delete(`http://localhost:8000/api/ninjas/${ninjaInfo._id}`)
            .then(res=>{
                console.log("response after axios delete-->", res)
                history.push("/")

            })
            .catch(err=>console.log("errrrrr when deleting-->", err))
    }


    return (
        <div>
            <h1>Info about ninja with the id {idParam}</h1>
            <p>Name: {ninjaInfo.name}</p>
            <p>Number of Projects: {ninjaInfo.numProjects}</p>
            <p>Grad Date: {ninjaInfo.graduationDate}</p>
            <p>Veteran: {ninjaInfo.isVeteran? "Is Veteran" : "Not Veteran"}</p>
            <p><button onClick = {deleteClickHandler} className = "btn btn-danger">Delete!</button></p>
        </div>
    );
};


export default OneNinja;