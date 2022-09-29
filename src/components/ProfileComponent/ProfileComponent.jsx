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
            <div className="profile__firstName">Jeremy </div>
            <div>Robson</div>
          </h1>
        </div>
      </div>
      <div>
        <ul className="profile__periodicity">
          <li>Daily</li>
          <li className="selected">Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
