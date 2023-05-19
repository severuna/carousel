import { useState, useEffect } from 'react';
import './Main.css';
import Card from './Card/Card';

const Main = () => {   
    
    const cards = [
        { 
            id: 1,
            title: 'Card #'
        },
        { 
            id: 2,
            title: 'Card #'
        },
        { 
            id: 3,
            title: 'Card #'
        },
        { 
            id: 4,
            title: 'Card #'
        },
        { 
            id: 5,
            title: 'Card #'
        },
    ];
    

    let [ currentIndex, setCurrentIndex ] = useState(0);

    const prevSlide = ( e ) => {

        e.preventDefault();

        let counter = currentIndex - 1;
        
        if (counter === -1) {
            return setCurrentIndex(4)
        } else {
            return setCurrentIndex(counter)
        }

    };

    const nextSlide = ( e ) => {
        e.preventDefault();

        let counter = currentIndex + 1;

        if (counter === cards.length ) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(counter)
        }

    };

    useEffect(() => {
        setCurrentIndex(currentIndex)
    }, [currentIndex])

    return (
        <div className="main column">
            <h1 className='title'>Carousel</h1>
            <div className='carousel row'>
                <button onClick={(e) => prevSlide(e)} className='carousel-btn'>
                    {'<'}
                </button>
                <Card {...cards[currentIndex]} />
                <button onClick={(e) => nextSlide(e)} className='carousel-btn'>
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Main;
