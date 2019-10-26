import React from 'react';
import '../styles/card/Card.scss';

const Card = props => {
    return (
        <div className='card__content'>
            <div className='img__part'>
                <img src='https://source.unsplash.com/random/150x150' />
                <p className='card__img'></p>
            </div>
            <article className='card__text'>
                <h2 id='card__name'>Basia Sołtysińska</h2>
                <h2 id='card__role'>Founder</h2>
                <h2 id='card__location'>Warsaw</h2>
            </article>
        </div>
    );
}

export default Card;