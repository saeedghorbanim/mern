import React, {useState} from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewNinjaForm = (e) => {

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        name: null,
        numProjects: null,
        graduationDate: null,
        isVeteran: false
    })

    let [validationErrors, setValidationErrors] = useState({})

    const changeHandler = (e)=> {
        console.log(e.target.name, e.target.value)
        if(e.target.type === "checkbox"){ //this is related just to the checkbox
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        }
        else{
            setFormInfo({ //this is related to all other ones
                ...formInfo,
                [e.target.name]:e.target.value
            })
        }
    }

    const submitHandler = (e)=> {
        e.preventDefault();



        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(res=>{
                if(res.data.err){ //if there is validation errors
                    setValidationErrors(res.data.err.errors)
                }
                else{
                    history.push("/") //this redirects if submitted properly
                }
            })
            .catch(err=>console.log("you have an error ", err))
    }


    return (
        <div>
            <h3> Create a new ninja below</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className='form-control' />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Number of Projects:</label>
                    <input onChange = {changeHandler} type="number" name="numProjects" id="" className='form-control' />
                    <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Graduation Date:</label>
                    <input onChange = {changeHandler} type="date" name="graduationDate" id="" className='form-control' />
                    <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Veteran?</label>
                    <input onChange = {changeHandler} type="checkbox" name="isVeteran" id="" />
                </div>
                
                <input className= "btn btn-primary" type="submit" value="Create Ninja!" />
            </form>
            
        </div>
    );
};

NewNinjaForm.propTypes = {};

export default NewNinjaForm;