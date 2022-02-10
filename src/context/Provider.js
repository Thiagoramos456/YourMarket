import React from 'react'
import AppContext from './AppContext'

function Provider({ children }) {
  const contextValue = {};
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider