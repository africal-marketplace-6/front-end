import axios from "axios";
import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

export default function ItemList() {
    const { id } = useParams();
    const [ items , setItems ] = useState([]);


    useEffect(()=> {
        axios.get(`https://african-marketplace-6.herokuapp.com/api/users/${id}/items`)
        .then(res => {
            setItems(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="itemsContainer">
            {items.map(item => {
                return(
                    <div className="item">
                        <h2>Item Name: {item.item}</h2>
                        <p>Location : {item.location}</p>
                        <p>Description: {item.description}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                )
            })}
            
        </div>
    )
}