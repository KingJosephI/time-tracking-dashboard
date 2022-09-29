import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.scss';
import ellipsisIcon from '../../images/icon-ellipsis.svg';
import workIcon from '../../images/icon-work.svg';

const Card = ({
  image,
  title,
  currentHours,
  previousHours,
  periodicity,
  bgColor,
  ...props
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
      }}
      {...props}
    >
      <div className="card__description">
        <div className="card__category">
          <h4 className="card__category-name">{title}</h4>
          <div>
            <img src={ellipsisIcon} alt="Ellipsis" />
          </div>
        </div>
        <div className="card__details">
          <h2 className="card__current-hours">{currentHours}hrs</h2>
          <div>
            <strong className="card__periodicity">Last {periodicity} - </strong>
            <strong className="card__previous-hours">{previousHours}hrs</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  currentHours: PropTypes.number,
  previousHours: PropTypes.number,
  periodicity: PropTypes.string,
};

Card.defaultProps = {
  image: workIcon,
  title: 'Work',
  currentHours: 32,
  previousHours: 36,
  periodicity: 'Week',
};

export default Card;
