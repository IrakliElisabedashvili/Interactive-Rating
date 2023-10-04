import './App.css';
import thanksImg from './assets/illustration-thank-you.svg';

export default function ThankYou({rating}) {
    return (
        <>
            <div className='img-box'>
                <img src={thanksImg} alt="Thank You" />
            </div>
            <div className='title'>
                <p>You selected {rating} out of 5</p>
            </div>
            <div className='thanks-texts'>
                <h1>Thank You</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </>
    )
}