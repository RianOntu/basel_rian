'use client';
import React, { useState } from 'react';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission (e.g., send to an API)
        console.log({ rating, review, name, email });
    };

    return (
        <form onSubmit={handleSubmit} className='w-full'>
          
            <div>
                <label>Your rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">☆</option>
                    <option value="2">☆☆</option>
                    <option value="3">☆☆☆</option>
                    <option value="4">☆☆☆☆</option>
                    <option value="5">☆☆☆☆☆</option>
                </select>
            </div>
            <div>
                <label>Your review:</label>
                <textarea className='border-black focus:outline-none bg-gray-300' value={review} onChange={(e) => setReview(e.target.value)} required />
            </div>
            <div>
                <label>Name:</label>
                <input className='border-black focus:outline-none bg-gray-300' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input className='border-black focus:outline-none bg-gray-300' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className='primary_bg_color' type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;