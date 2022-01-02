import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Edit = () => {
    const { idParam } = useParams();

    const history = useHistory();

    const [ninjaInfo, setNinjaInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${idParam}`)
        .then(res=>{
            setNinjaInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])


    const changeHandler = (e)=> {
        console.log(e.target.name, e.target.value)
        if(e.target.type === "checkbox"){ //this is related just to the checkbox
            setNinjaInfo({
                ...ninjaInfo,
                isVeteran: !ninjaInfo.isVeteran
            })
        }
        else{
            setNinjaInfo({ //this is related to all other ones
                ...ninjaInfo,
                [e.target.name]:e.target.value
            })
        }
    }



    const submitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${idParam}`, ninjaInfo)
            .then(res=>{
                console.log("response after put request", res)
                history.push(`/ninja/${idParam}`); //this redirects if submitted properly
            })
            .catch(err => console.log(err))
    }




    return (
        <div>
             <div>
            <h3> Create a new ninja below</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className='form-control' value = {ninjaInfo.name}/>
                    
                </div>
                <div className="form-group">
                    <label>Number of Projects:</label>
                    <input onChange = {changeHandler} type="number" name="numProjects" id="" className='form-control' value = {ninjaInfo.numProjects} />
                    
                </div>
                <div className="form-group">
                    <label>Graduation Date:</label>
                    <input onChange = {changeHandler} type="date" name="graduationDate" id="" className='form-control' value = {ninjaInfo.graduationDate}/>
                    
                </div>
                <div className="form-group">
                    <label>Veteran?</label>
                    <input onChange = {changeHandler} type="checkbox" name="isVeteran" id="" checked = {ninjaInfo.isVeteran}/>
                </div>
                
                <input className= "btn btn-primary" type="submit" value="Update Ninja!" />
            </form>
            
        </div>
        </div>
    );
};



export default Edit;