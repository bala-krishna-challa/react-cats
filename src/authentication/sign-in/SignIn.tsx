import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';

import { Form, useActionData } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from 'tss-react/mui';
import { ChangeEvent, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { getErrorByCode } from './util';

const useStyles = makeStyles()(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '430px',
    },
  },
  logo: { margin: theme.spacing(1), bgcolor: theme.palette.secondary.main },
  submitButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

interface SignInState {
  email: string;
  password: string;
  error: {
    code: string;
    message: string;
  };
}

const SignIn = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const routeData = useActionData() as SignInState;
  const { classes } = useStyles();

  useEffect(() => {
    if (routeData) {
      setError(getErrorByCode(routeData.error.code));
      setUsername(routeData.email);
      setPassword(routeData.password);
    }
  }, [routeData]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    setError('');
  };

  return (
    <Box className={classes.root}>
      <Paper elevation={2} className={classes.container}>
        <Avatar className={classes.logo}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form method="post" action="/sign-in" aria-label="Sign in form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter your Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={username}
            onChange={changeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={changeHandler}
          />
          {error && (
            <Alert severity="error" variant="outlined">
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submitButton}
          >
            Sign In
          </Button>
        </Form>
      </Paper>
    </Box>
  );
};

export default SignIn;
