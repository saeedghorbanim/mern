import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";



const SearchForm = () => {

    //state variable to store the categories from the api call
    const [categories, setCategories] = useState([])

    //state variable to store the info collected in the form
    const [formInfo, setFormInfo] = useState ({
        //we se category to people because the drop down menu starts with "people" option
        //and id empty
        category:"people",
        id: ""
    })

    //initialize useHistory and store it in a variable so we can use it 
    const history = useHistory();


    //when page loads up, i want the axios to call the starwars api and get 
    //all the categories, and store the categories in a state variable so that i can 
    //pre-populate the dropdown with those categories
    useEffect(()=> {
        //use axios to get all the categories
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                console.log("res looks like -->", res)
                setCategories(Object.keys(res.data))
            })
            .catch(err=> console.log(err))
    }, [])

    //this changeHandler is to keep track of the form changing
    const changeHandler= (e)=>{
        console.log(e.target.name) //e.target.name is the name of the input that was changed --> and this name of the input matches a key in our state variable formInfo 
        console.log(e.target.value)
        setFormInfo({
            ...formInfo, 
            [e.target.name]:e.target.value
        })

    }

    //this function runs after the form is submitted
    const submitHandler = (e)=> {
        //preventDefault() prevents the page from refreshing after submission
        e.preventDefault();

        //After the form is submitted we redirect using useHistory()
        history.push(`/${formInfo.category}/${formInfo.id}`) //similiar to saying redirect("/")


        // //making a request to the api
        // axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}/`)
        //     .then(res=>{
        //         console.log("response after submitting form", res)
        //     })
        //     .catch()
        

    }

    return (
        <div>
            <form onSubmit= {submitHandler} className="form-inline row g-3 align-items-center" action="">
                <div className="col-auto">
                    <select onChange = {changeHandler} name="category" id="" className="form-select">
                        {
                            categories.map((cat,i)=>{
                                return <option key= {i} value={cat}> {cat} </option>
                            })
                        }
                    </select>
                </div>
                <div className="col-auto">
                    <input onChange = {changeHandler} type="number" name="id" id="" className="form-control" />
                </div>
                <div className="col-auto">
                    <input className= "btn btn-success" type="submit" value="Search" />
                </div>
            </form>
        </div>
    );
};



export default SearchForm;