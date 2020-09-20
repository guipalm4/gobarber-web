import React from 'react';
import GlobalStyles from './styles/global';

import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyles />
  </>
);
export default App;
