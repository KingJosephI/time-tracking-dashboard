import { createContext, useState } from 'react';

export const PeriodContext = createContext();
export const PeriodProvider = ({ children }) => {
  const [period, setPeriod] = useState('weekly');

  return (
    <PeriodContext.Provider value={[period, setPeriod]}>
      {children}
    </PeriodContext.Provider>
  );
};
