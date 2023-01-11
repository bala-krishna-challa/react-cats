import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import logo from './assets/logo';
import { useEffect, useState } from 'react';

const useStyles = makeStyles<void, 'title' | 'caption'>()(
  (theme, _params, classes) => ({
    headerWrapper: {
      top: '-20px',
      position: 'sticky',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      [`&:hover .${classes.title}, &:hover .${classes.caption}`]: {
        color: theme.palette.primary.dark,
      },
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
    logoBox: {
      display: 'flex',
      padding: theme.spacing(1),
    },
    title: {
      fontWeight: 500,
      lineHeight: '1.8rem',
      fontSize: '1.8rem',
    },
    caption: {
      fontWeight: 400,
      lineHeight: '0.8rem',
      fontSize: '0.8rem',
      paddingLeft: theme.spacing(0.5),
    },
  })
);

function Header() {
  const [date, setDate] = useState('');
  const { classes } = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper elevation={2} square className={classes.headerWrapper}>
      <Container maxWidth={'lg'}>
        <Typography
          sx={{ textAlign: 'right', p: 0, height: '20px' }}
          variant="caption"
          component="p"
        >
          {date}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box className={classes.header}>
            <Box className={classes.logoBox}>
              <img src={logo.path} alt="Catstronaut" />
            </Box>
            <Box>
              <Typography className={classes.title} variant="h4" component="h1">
                Catstronaut
              </Typography>
              <Typography
                className={classes.caption}
                variant="subtitle2"
                component="h6"
              >
                Kitty space academy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default Header;
