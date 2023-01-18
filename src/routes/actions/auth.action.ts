import { Auth } from 'aws-amplify';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

interface Exception {
  code: string;
  message: string;
}

export async function signIn({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  try {
    await Auth.signIn({
      username: email as string,
      password: password as string,
    });
  } catch (e: unknown) {
    return {
      email,
      password,
      error: {
        code: (e as Exception).code,
        message: (e as Exception).message,
      },
    };
  }

  return redirect('/');
}
