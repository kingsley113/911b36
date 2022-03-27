import React from 'react';
import { Badge, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';

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
  previewText: (props) => ({
    fontSize: 12,
    color: props.color,
    fontWeight: props.fontWeight,
    letterSpacing: -0.17,
  }),
}));

const ChatContent = ({ conversation }) => {
  const { otherUser, unreadCount } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const styleProps =
    unreadCount > 0 ? { fontWeight: 'bold' } : { color: '#9CADC8' };
  const classes = useStyles(styleProps);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      top: '50%',
    },
  }));

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <StyledBadge badgeContent={unreadCount} color={'primary'}></StyledBadge>
    </Box>
  );
};

export default ChatContent;
