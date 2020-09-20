import React from 'react';
import GlobalStyles from './styles/global';
import AuthContext from './context/AuthContext';

import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Guilherme' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyles />
  </>
);
export default App;
