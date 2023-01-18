import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../authentication/sign-in';
import AppError from '../styleguide/AppError';
import ThemeWrapper from '../theme/theme-wrapper';
import { signIn } from './actions';
import { isAuthenticated } from './loaders';

export default createBrowserRouter([
  {
    path: '/sign-in',
    action: signIn,
    element: ThemeWrapper({ children: <SignIn /> }),
    errorElement: ThemeWrapper({ children: <SignIn /> }),
  },
  {
    path: '/',
    loader: isAuthenticated,
    element: ThemeWrapper({ children: <App /> }),
    errorElement: ThemeWrapper({ children: <AppError /> }),
  },
]);
