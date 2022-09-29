import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import workIcon from '../../images/icon-work.svg';
import playIcon from '../../images/icon-play.svg';
import studyIcon from '../../images/icon-study.svg';
import exerciseIcon from '../../images/icon-exercise.svg';
import socialIcon from '../../images/icon-social.svg';
import selfCareIcon from '../../images/icon-self-care.svg';
import data from '../../data.json';
import ProfileComponent from '../ProfileComponent/ProfileComponent';

const CardList = () => {
  // const imgAndColors = [
  //   {
  //     color: '#FF8B64',
  //     image: workIcon,
  //   },
  //   {
  //     color: '#55C2E6',
  //     image: playIcon,
  //   },
  //   {
  //     color: '#FF5E7D',
  //     image: studyIcon,
  //   },
  //   {
  //     color: '#4BCF82',
  //     image: exerciseIcon,
  //   },
  //   {
  //     color: '#7335D2',
  //     image: socialIcon,
  //   },
  //   {
  //     color: '#F1C75B',
  //     image: selfCareIcon,
  //   },
  // ];

  console.log(data);
  return (
    <div className="container">
      <ProfileComponent />
      {data.map(({ title, color, image, timeframes }, key) => {
        console.log(key);
        console.log(image);
        // let icon = data[key].image;
        return (
          <Card
            key={key}
            title={title}
            bgColor={color}
            // image={`import icon from ${image}`}
            // image={require(JSON.parse(image))}
            currentHours={timeframes.weekly.current}
            previousHours={timeframes.weekly.previous}
          />
        );
      })}
    </div>
  );
};

export default CardList;
