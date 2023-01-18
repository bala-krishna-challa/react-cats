import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

export interface Props {
  errorMessage?: string;
}

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  label: {
    fontSize: '.85rem',
  },
});

const AppError: React.FC<Props> = ({
  errorMessage = 'Something went wrong',
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Box p={1}>
        <ErrorOutlineIcon color="error" fontSize="large" />
      </Box>
      <Typography
        color="error"
        variant="body1"
        align="center"
        className={classes.label}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default React.memo(AppError);
