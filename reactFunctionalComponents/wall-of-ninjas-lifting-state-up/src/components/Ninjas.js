import React from 'react';

const Ninjas = (props) => {
    // delete a ninja
    const deleteNinja = (e,idxOfPersonIWantToDelete)=>{
        console.log("we are trying to delete this ninja:",idxOfPersonIWantToDelete)

        //goal is to delete something at index i (which represents the index number of the ninja we clicked delete on) from the listOfNinjas array

        //two ways to accomplish this goal
        //1st way--> filter()
        let newListOfNinjas = props.listOfNinjas.filter((ninja,idx)=>{
            return idx !== idxOfPersonIWantToDelete //return back a new array of objects where idx != i--> idx is the index number of each item in the list of ninjas. i is the index number of the ninja we want to delete
        })
        console.log("new list of ninjas: ", newListOfNinjas)
        props.setListOfNinjasss(newListOfNinjas);

    }

    return (
        <div>
             {
                props.listOfNinjas.map((ninja,i) =>{
                    return <div  key = {i}style = {{backgroundColor: ninja.favColor}} className="card">
                    <img width="150px" src={ninja.imgLink} alt="Card image cap" />
                    <div className="card-body">
                      <h4 className="card-title">{ninja.name}</h4>
                      <p className="card-text">
                        Favorite Hobby: {ninja.favHobby}
                      </p>
                      <button onClick = {(e)=>deleteNinja(e,i)} className="btn btn-danger">Retire</button>
                    </div>
                  </div>
                  
                })
            }
        </div>
    );
};

export default Ninjas;