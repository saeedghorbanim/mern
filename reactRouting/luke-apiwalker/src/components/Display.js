import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const Display = () => {

    //useParam is obtanaining category and id from teh route address
    //and letting us use it to display its info
    const { category, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res=>{
                setInfo(res.data)
            })
            .catch(err=>console.log(err))
    //this "id" in the array means run this useEffect function again
    //when the id changes
    },[category,id])
    return (
        
        <div>
            {category=="people"?
            <>
                <h1> Info from starwars to display about: {category} and {id}</h1>
                <h3> Name: {info.name}</h3>
                <h3> height: {info.height}</h3>
                <h3> Mass: {info.mass}</h3>
            </>
            :
            category=="planets"?
            <>
                <h1> Info from starwars to display about: {category} and {id}</h1>
                <h3> Name: {info.name}</h3>
                <h3> Climate: {info.climate}</h3>
                <h3> Terrain: {info.terrain}</h3>
            </>
            :
            category=="films"?
            <>
                <h1> Info from starwars to display about: {category} and {id}</h1>
                <h3> Title: {info.title}</h3>
                <h3> Director: {info.director}</h3>
                <h3> Producer: {info.producer}</h3>
            </>:
            <h1>who is this?</h1>
            }
        </div>
    );
};



export default Display;