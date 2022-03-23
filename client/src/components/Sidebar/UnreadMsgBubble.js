import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  bubble: {
    backgroundColor: '#3F92FF',
    borderRadius: '10px',
    height: '20px',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: '3px 7px',
  },
}));

const UnreadMsgBubble = ({ unreadCount }) => {
  const classes = useStyles();

  return (
    <Box className={classes.bubble}>
      <Typography className={classes.text}>{unreadCount}</Typography>
    </Box>
  );
};

export default UnreadMsgBubble;
