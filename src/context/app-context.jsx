import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

const AppContextProvider = ({ value, children }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export default AppContextProvider;

export function useAppContext() {
  return React.useContext(AppContext);
}

AppContextProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
