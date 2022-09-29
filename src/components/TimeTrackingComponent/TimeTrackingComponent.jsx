import { useContext } from 'react';
import { PeriodContext } from '../../contexts/PeriodContext';
import Card from '../Card/Card';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import { data } from '../../data';
import './TimeTrackingComponent.scss';

const TimeTrackingComponent = () => {
  const [period] = useContext(PeriodContext);

  return (
    <div className="card-list">
      <ProfileComponent />
      {data.map(({ title, color, image, timeframes }, key) => {
        const { current: currentDaily, previous: previousDaily } =
          timeframes.daily;
        const { current: currentWeekly, previous: previousWeekly } =
          timeframes.weekly;
        const { current: currentMonthly, previous: previousMonthly } =
          timeframes.monthly;

        const currentHours =
          period === 'daily'
            ? currentDaily
            : period === 'weekly'
            ? currentWeekly
            : currentMonthly;

        const previousHours =
          period === 'daily'
            ? previousDaily
            : period === 'weekly'
            ? previousWeekly
            : previousMonthly;

        return (
          <Card
            key={key}
            title={title}
            bgColor={color}
            image={image}
            currentHours={currentHours}
            previousHours={previousHours}
            period={
              period === 'daily'
                ? 'Day'
                : period === 'weekly'
                ? 'Week'
                : 'Month'
            }
          />
        );
      })}
    </div>
  );
};

export default TimeTrackingComponent;
