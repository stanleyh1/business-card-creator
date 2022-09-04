import React, { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from 'firebase/firestore'
import { Navigate } from "react-router-dom";

const CardCreator = () => {

    const cardsCollectionRef = collection(db, "Business cards");

    
    const [businessCard, setBusinessCard] = useState( {name: "", businessName: "", jobTitle: "", email: "", phoneNumber: "", website: ""} )
    
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setBusinessCard((prev) => {
            return {...prev, [name]: value};
        });
    };
    
    const createCard = async (event) => {
        event.preventDefault()
        const result = await addDoc(cardsCollectionRef, {name: businessCard.name, businessName: businessCard.businessName, jobTitle: businessCard.jobTitle,  phoneNumber: businessCard.phoneNumber, email: businessCard.email, website: businessCard.website})
        Navigate.to('/yourbusinesscard')
    }

    return(
        <>
        <h1>Create your business card...</h1>
        <form className='business-card-form'>
        <legend>Your name</legend>
        <input className="name" placeholder="Your name here" name="name" value={businessCard.name} onChange={handleChange}/>
        <legend>Business Name</legend>
        <input className='business-name' placeholder='Business name here' name="businessName" value={businessCard.businessName} onChange={handleChange}/>
        <legend>Job title</legend>
        <input className='job-title' placeholder='Your job title here' name="jobTitle" value={businessCard.jobTitle} onChange={handleChange}/>
        <legend>Phone number</legend>
        <input className='phone-numer' placeholder='Your phone number here' name="phoneNumber" value={businessCard.phoneNumber} onChange={handleChange}/>
        <legend>Email address</legend>
        <input className='email-address' placeholder='Your email address here' name="email" value={businessCard.email} onChange={handleChange}/>
        <legend>Website</legend>
        <input className='website' placeholder='Your website URL here' name="website" value={businessCard.website} onChange={handleChange}/>
        <button onClick={createCard}>Create your business card!</button>
        </form>
        </>
    )
}

export default CardCreator;