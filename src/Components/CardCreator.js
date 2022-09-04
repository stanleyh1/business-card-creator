import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, addDoc } from 'firebase/firestore'


const CardCreator = () => {

    const cardsCollectionRef = collection(db, "Business cards");
    const navigate = useNavigate();
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
        navigate(`/yourbusinesscard/${result.id}`)
    }

    return(
        <>
        <h1 className="">Create your business card...</h1>
        <form className="">
        <legend>Your name</legend>
        <input className="border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Your name here" name="name" value={businessCard.name} onChange={handleChange}/>
        <legend>Business Name</legend>
        <input className='' placeholder='Business name here' name="businessName" value={businessCard.businessName} onChange={handleChange}/>
        <legend>Job title</legend>
        <input className='' placeholder='Your job title here' name="jobTitle" value={businessCard.jobTitle} onChange={handleChange}/>
        <legend>Phone number</legend>
        <input className='' placeholder='Your phone number here' name="phoneNumber" value={businessCard.phoneNumber} onChange={handleChange}/>
        <legend>Email address</legend>
        <input className='' placeholder='Your email address here' name="email" value={businessCard.email} onChange={handleChange}/>
        <legend>Website</legend>
        <input className='' placeholder='Your website URL here' name="website" value={businessCard.website} onChange={handleChange}/>
        <button className="" onClick={createCard}>Create your business card!</button>
        </form>
        </>
    )
}

export default CardCreator;