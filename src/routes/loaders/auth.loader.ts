import { Auth } from 'aws-amplify';
import { redirect } from 'react-router-dom';

export async function isAuthenticated() {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return redirect('/sign-in');
  }
}
