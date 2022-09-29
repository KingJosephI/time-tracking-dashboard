import { createContext, useState } from 'react';

export const PeriodContext = createContext();
export const PeriodProvider = ({ children }) => {
  const periodicity = useState('weekly');

  return (
    <PeriodContext.Provider value={periodicity}>
      {children}
    </PeriodContext.Provider>
  );
};
