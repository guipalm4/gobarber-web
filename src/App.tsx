import React from 'react';
import GlobalStyles from './styles/global';
import { AuthProvider } from './context/AuthContext';
// import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
  </>
);
export default App;
