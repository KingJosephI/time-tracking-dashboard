import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = () => {
  const imgAndColors = [
    {
      color: '#FF8B64',
      image: '../../images/icon-work.svg',
    },
    {
      color: '#55C2E6',
      image: '../../images/icon-play.svg',
    },
    {
      color: '#FF5E7D',
      image: '../../images/icon-study.svg',
    },
    {
      color: '#4BCF82',
      image: '../../images/icon-exercise.svg',
    },
    {
      color: '#7335D2',
      image: '../../images/icon-social.svg',
    },
    {
      color: '#F1C75B',
      image: '../../images/icon-self-care.svg',
    },
  ];
  return (
    <div>
      {imgAndColors.map(({ color, image }, key) => (
        <Card key={key} bgColor={color} image={image} />
      ))}
    </div>
  );
};

export default CardList;
