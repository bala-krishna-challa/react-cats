import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import AuthWrapper from '../authentication/auth-wrapper';
import theme from './theme';

const ThemeWrapper: React.FC<PropsWithChildren> = props => (
  <ThemeProvider theme={theme}>
    <AuthWrapper {...props} />
  </ThemeProvider>
);

export default ThemeWrapper;
