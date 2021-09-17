import React from 'react';
import './chat-card.styles.scss';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Agent from '../assets/thanos.png';
import User from '../assets/iron-man.png';

const ChatCard = ({ message, createdAt, sender }) => {
  dayjs.extend(relativeTime);

  return (
    <div className='chat-card'>
      <div className={`${sender} card-user`}>
        <div className='profile'>
          <img src={sender === 'user' ? User : Agent} alt='profile' />
        </div>
        <div className='chat-content'>
          <p className={`message-${sender}`}>{message}</p>
          <span className='time'>{dayjs(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
