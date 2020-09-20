import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<ContextAuthData>({} as AuthContextData);

export default AuthContext;
