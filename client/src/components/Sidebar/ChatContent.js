import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UnreadMsgBubble from './UnreadMsgBubble';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 20,
  },
  username: {
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: '#9CADC8',
    letterSpacing: -0.17,
  },
  unreadText: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.17,
  },
  unreadBubble: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser, unreadCount } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={unreadCount > 0 ? classes.unreadText : classes.previewText}
        >
          {latestMessageText}
        </Typography>
      </Box>
      {unreadCount > 0 ? (
        <Box className={classes.unreadBubble}>
          <UnreadMsgBubble unreadCount={unreadCount} />
        </Box>
      ) : null}
    </Box>
  );
};

export default ChatContent;
