import React from 'react';
import profilePic from '../../images/image-jeremy.png';
import './ProfileComponent.scss';

const ProfileComponent = () => {
  return (
    <div className="profile">
      <div className="profile__details">
        <div>
          <img src={profilePic} alt="Jeremy" className="profile__image" />
        </div>
        <div className="profile__info">
          <span>Report for</span>
          <h1 className="profile__name">
            Jeremy
            <br />
            Robson
          </h1>
        </div>
      </div>
      <div className="profile__periodicity">
        <ul>
          <li>Daily</li>
          <li className="selected">Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
