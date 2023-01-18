import { Authenticator } from '@aws-amplify/ui-react';
import './authenticator.css';
/**
 * Invisibale Authenticator as there is a known issue with Authenticator.Provider
 * https://github.com/aws-amplify/amplify-ui/issues/1977
 */
const AppAuthenticator = () => {
  return <Authenticator />;
};

export default AppAuthenticator;
