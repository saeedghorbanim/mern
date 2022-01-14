import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";



const AllNinjas = () => {

    //state variable to get the list of all ninjas from the database in order to forward the info to the webpage
    const [allNinjas, setAllNinjas] = useState([])
    //state variable to track if delete is clicked so that if it is, the component can rerender
    const [deleteClicked, setDeleteClicked] = useState(false)


    //call the api upon initial rendering of the component and save the array of ninjas into my variable to store all the ninjas in
    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(res => {
                console.log("*****res is this", res)
                setAllNinjas(res.data.results)
            })
            .catch(err=> console.log("Error", err))
    },[deleteClicked])


    const deleteClickHandler = (e,idOfNinja)=>{
        console.log("trying to delete ninja with this id-->", idOfNinja )
        axios.delete(`http://localhost:8000/api/ninjas/${idOfNinja}`)
            .then(res=>{
                console.log("response after axios delete-->", res)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err=>console.log("errrrrr when deleting-->", err))
    }



    return (
        <div>
            <h3>All the ninjas</h3>

            {/* display all the ninjas */}
            {allNinjas.map((ninja,i)=>{
                return <div key = {i} className="card">
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/ninja/${ninja._id}`}>{ninja.name}</Link> |  
                    <Link to = {`/ninja/edit/${ninja._id}`}> Edit</Link></h4>
                    <p className="card-text"> Graduation Date: {ninja.graduationDate}</p>
                    <p className="card-text"> Number of Projects: {ninja.numProjects}</p>
                    <p className="card-text"> Is Veteran: {ninja.isVeteran? "Veteran" : "Not Veteran"}</p>
                    <p><button onClick = {(e)=>deleteClickHandler(e,ninja._id)} className="btn btn-danger">Delete Ninja</button></p>
                </div>
              </div>
            })}
        </div>
    );
};


export default AllNinjas;