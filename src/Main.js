import './Main.css';
import Card from './components/Card/Card';

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

let elements = [];

cards.forEach(element => {
    elements.push(<Card {...element} />)
})

const Main = () => {
    return (
        <div className="main column">
            <h1 className='title'>Carousel</h1>
            {elements}
        </div>
    )
}

export default Main;
