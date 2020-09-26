import React from 'react';
import GlobalStyles from './styles/global';
import AppProvider from './hooks';
// import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyles />
  </>
);
export default App;
