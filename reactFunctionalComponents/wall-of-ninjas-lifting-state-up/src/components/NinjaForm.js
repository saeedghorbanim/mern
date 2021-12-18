import React, {useState} from 'react';

const NinjaForm = (props) => {

    const [formInfo, setFormInfo] = useState({
        //each of these (name, imgLink, ...) should match with the 
        //name in input of the form in order to work
        name: "",
        imgLink: "",
        numProj: "",
        favHobby: "",
        favColor: ""
    })

    // const [listOfNinjas, setListOfNinjas] = useState([])

    const changeHandler = (e) =>{
        //so in this case e.target can call on any part of the input line
        //as you see we calling upon the name, value(which is what we type in the form)
        console.log("changing input", e.target.name, e.target.value)

        //now we want to set it up to update e.target.name to be e.target.value
        //in setFormInfo so it updates each object created with the info inputed
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const addNinja = (e)=> {
        e.preventDefault();

        // const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

        //add to the list(array) of ninjas the new object containing information from the form (the object represnts the info about a new ninja)
        props.setListOfNinjas([...props.listOfNinjas, formInfo])

        //i am setting form info to be an object with empty values for its keys again so that I can make the inputs show these values to clear the from out after submitting
        setFormInfo({
            name:"",
            imgLink: "",
            numProj: "",
            favHobby: "",
            favColor:""
         })

        
    }

    return (
        <div>
            <form onSubmit={(e)=>addNinja(e)}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    {/* onChange is an event listner and (e)=> is an anonymus callback function */}
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="name" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="imgLink" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="number" name="numProj" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Hobby:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favHobby" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="favColor" id="" className="form-control" />
                </div>
                <input type="submit" value="Add to Wall of Ninjas" className='btn btn-success' />
            </form>

            <hr/>
           
        </div>
    );
};

export default NinjaForm;