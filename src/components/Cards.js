import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our new articles:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='20 Health benefits of cannabis that everyone should know'
              label='Recommended'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Marijuana Street Names and Nicknames'
              label='Hilarious!'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='20+ Good Health Reasons To Drink Coffee'
              label='Interesting'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='13 Health Benefits of Coffee, Based on Science'
              label='Recommended'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Does marijuana legalization have an impact on the level of crime in any country?'
              label='Facts'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
