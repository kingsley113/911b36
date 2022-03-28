import React from 'react';
import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
}));

const Chat = ({ conversation, setActiveChat, updateConversations }) => {
  const classes = useStyles();
  const { otherUser } = conversation;

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.otherUser.username);
    if (conversation.id) {
      const response = await axios.patch('/api/messages/read-status', {
        conversationId: conversation.id,
      });
      if (response.status === 204) updateConversations();
    }
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
    </Box>
  );
};

export default Chat;
