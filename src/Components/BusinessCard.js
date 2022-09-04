import React, {useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../firebase.js";
import { getDoc, doc } from "firebase/firestore";

const BusinessCard = () => {

    const [businessCard, setBusinessCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const cardRef = doc(db, "Business cards", id);
    console.log(cardRef)


    useEffect(() => {
        const getBusinessCard = async () => {
            const card = await getDoc(cardRef)
            setBusinessCard(card.data())
        };
        getBusinessCard();
    },[]);
    

    if (loading) {
        return <h1>Loading...</h1>;
    }


    return(
        <div>
            <h1>Your business card</h1>
            
                <div key={businessCard.name}>
                    <h2>{businessCard.name}</h2>
                    <h3>{businessCard.businessName}</h3>
                    <h4>{businessCard.jobTitle}</h4>
                    <p>{businessCard.email}</p>
                    <p>{businessCard.phoneNumber}</p>
                    <p>{businessCard.website}</p>
                </div>
        </div>
    )
}

export default BusinessCard;