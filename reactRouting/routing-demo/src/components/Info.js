import React from 'react';
import { useParams } from 'react-router';


const Info = () => {
    // its getting the "id" from the paramets in App.js route for "Info"
    const {id} = useParams();



    return (
        <div>
            {/* we are presenting the "id" number which we insert in the URL here */}
            <h1>Details about person #{id} </h1>
        </div>
    );
};



export default Info;