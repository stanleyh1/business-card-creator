import React, {useState, useEffect} from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const BusinessCard = () => {

    const [businessCards, setBusinessCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const cardsCollection = collection(db, "Business cards");

    useEffect(() => {
        const getBusinessCards = async () => {
            const cards = await getDocs(cardsCollection)
            setBusinessCards(cards.docs.map((doc) => ({...doc.data()})))
        };

        getBusinessCards();
    },[]);
    

    if (loading) {
        return <h1>Loading...</h1>;
    }


    return(
        <div>
            <h1>Your business card</h1>
            {businessCards.map((businessCard) => (
                <div key={businessCard.name}>
                    <h2>{businessCard.name}</h2>
                    <h3>{businessCard.businessName}</h3>
                    <h4>{businessCard.jobTitle}</h4>
                    <p>{businessCard.email}</p>
                    <p>{businessCard.phoneNumber}</p>
                    <p>{businessCard.website}</p>
                </div>
            ))}
        </div>
    )
}

export default BusinessCard;