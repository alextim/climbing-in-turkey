import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

export default function AppContextProvider({ value, children }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext);
}

AppContextProvider.propTypes = {
  value: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

