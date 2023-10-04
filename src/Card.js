import { useState } from 'react';
import './App.css';
import Rating from './Rating';
import ThankYou from './ThankYou';

export default function Card() {

    const [mainpage, setMainPage] = useState('Rating');  
    const [rating, setRating] = useState(0);
    return (
        <div className='card-cont'>
            {
                mainpage === 'Rating' ? <Rating rating={rating} setRating={setRating} setMainPage={setMainPage} /> : <ThankYou rating={rating} />
            }
        </div>
    )
}