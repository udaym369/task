import React from 'react';
import Home from './Home';
import Patients from './Patients';
import SearchPatients from './SearchPatients'

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Patients') return <Patients />;
  if (pageName === 'SearchPatients') return <SearchPatients/>
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showPatientsFamilyMembers: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;