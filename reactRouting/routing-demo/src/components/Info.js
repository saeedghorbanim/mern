import React from 'react';
import { useParams } from 'react-router';


const Info = () => {
    // its getting the "id" from the paramets in App.js route for "Info"
    const {id, color, width} = useParams();



    return (
        <div>
            {/* if else statement */}
            { isNaN(id)
                ? <h1>Thats not a person's id</h1>
                // we are presenting the "id" number which we insert in the URL here 
                : <h1 style = {{color:color, width: `${width}px`}}>Details about person #{id} </h1>
            }
            
            
        </div>
    );
};



export default Info;