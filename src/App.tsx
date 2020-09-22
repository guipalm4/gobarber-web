import React from 'react';
import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
// import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import Toast from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <Toast />

    <GlobalStyles />
  </>
);
export default App;
