import { Authenticator } from '@aws-amplify/ui-react';
import { PropsWithChildren } from 'react';
import AppAuthenticator from './authenticator';

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <Authenticator.Provider>
    {children}
    <AppAuthenticator />
  </Authenticator.Provider>
);

export default AuthWrapper;
