import React, {useState} from 'react';
import axios from 'axios';

const CoinsWithAxios = () => {

    const [allCoins, setAllCoins] = useState([])


    const clickHandler = () => {
    console.log("click!")

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        //this .then is to convert the fetch data into json

        //this .then means when the response is recieved back from the api call, what to do with it
        .then(res=>{

        //we console.log the resposne to see what it gives us
        console.log(res)

        res.data,sort(function(a,b) {
            return a.current_price - b.current_price;
        });
        //setting our variable allCoins (state variable) to be the response 
        setAllCoins(res.data)
        })

        // and .catch means if there were any errors that came up in our api request, this is where we handle those errors
        .catch(err=>{
        console.log(err)
        }) 
    }
    return (
    <div className="App container">
        <h1>Hello there</h1>
        <button onClick= {clickHandler}  className="btn btn-success">Show me the money</button>
        {
        allCoins.map((coin, index)=> {
            return <div key = {index} className="card">
            <div className="card-body">
            <h4 className="card-title">{coin.name}</h4>
            <p className="card-text">
                Current price: $ {coin.current_price}
            </p>
            </div>
        </div>
        })
        }
    </div>
    );
};

export default CoinsWithAxios;