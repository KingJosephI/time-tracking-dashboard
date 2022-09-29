import { useContext } from 'react';
import { PeriodContext } from '../../contexts/PeriodContext';
import profilePic from '../../images/image-jeremy.png';
import './ProfileComponent.scss';

const ProfileComponent = () => {
  const [, setPeriod] = useContext(PeriodContext);

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
          <li onClick={() => setPeriod('daily')}>Daily</li>
          <li onClick={() => setPeriod('weekly')} className="selected">
            Weekly
          </li>
          <li onClick={() => setPeriod('monthly')}>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
