import React, { useRef, useEffect } from 'react';
import './chat-box.styles.scss';

import ChatCard from '../chat-card/chat-card.component';
import SendBox from '../send-box/send-box.component';

const ChatBox = ({ data }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [data]);
  return (
    <div className='chat-box'>
      <div className='chat-container'>
        {data.map((data) => (
          <ChatCard key={data._id} {...data} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <SendBox />
    </div>
  );
};

export default ChatBox;
