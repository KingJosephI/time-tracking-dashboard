import React from 'react';
import Card from '../Card/Card';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import { data } from '../../data';
import './TimeTrackingComponent.scss';

const TimeTrackingComponent = () => {
  return (
    <div className="card-list">
      <ProfileComponent />
      {data.map(({ title, color, image, timeframes }, key) => {
        return (
          <Card
            key={key}
            title={title}
            bgColor={color}
            image={image}
            currentHours={timeframes.weekly.current}
            previousHours={timeframes.weekly.previous}
          />
        );
      })}
    </div>
  );
};

export default TimeTrackingComponent;
