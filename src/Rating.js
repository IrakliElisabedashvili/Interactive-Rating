import './App.css';
import starImg from './assets/icon-star.svg';

export default function Rating({rating, setRating, setMainPage}) {
    return (
        <>
            <div className='icon-box'>
                <img src={starImg} alt='Star Icon'/>
            </div>
            <div className='texts'>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='rating-btn'>
                {[1, 2, 3, 4, 5].map((button, index) => {
                    const isActive = button === rating;
                    return (
                        <div
                            className={`button ${isActive ? "activeButton" : null}`}
                            key={index}
                            onClick={()=>{
                                setRating(button);
                            }}
                        >{button}</div>
                    );
                })}
            </div>
            <button className='submit-btn' onClick={()=>{setMainPage('ThankYou')}}>SUBMIT</button>
        </>
    )
}