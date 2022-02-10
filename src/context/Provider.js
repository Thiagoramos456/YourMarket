import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [homeDailyOffers, setHomeDailyOffers] = useState({});

  const contextValue = { homeDailyOffers, setHomeDailyOffers };
  return (
    <AppContext.Provider value={ contextValue }>{children}</AppContext.Provider>
  );
}

export default Provider;
