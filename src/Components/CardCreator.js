import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


const CardCreator = ({ loggedInUser }) => {

    return(
        <>
        <h1>Create your business card...</h1>
        <form className='business-card-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <legend className="block text-gray-700 text-sm font-bold mb-2">Your name</legend>
        <input className='name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"' placeholder="Your name here"/>
        <legend>Job title</legend>
        <input className='job-title' placeholder='Your job title here'/>
        <legend>Business Name name</legend>
        <input className='business-name' placeholder='Business name here'/>
        <legend>Phone number</legend>
        <input className='phone-numer' placeholder='Your phone number here'/>
        <legend>Email address</legend>
        <input className='email-address' placeholder='Your email address here'/>
        <legend>Website</legend>
        <input className='website' placeholder='Your website URL here'/>
        <button className='create-card'>Create your business card!</button>
        </form>
        </>
    )
}

export default CardCreator;