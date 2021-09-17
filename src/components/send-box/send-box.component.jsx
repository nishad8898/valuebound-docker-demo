import React, { useState } from 'react';
import './send-box.styles.scss';

import FormInput from '../../form-input/form-input.component';

import { connect } from 'react-redux';
import { sendMessage } from '../../redux/chat/chat.action';

const SendBox = ({ sendMessage, chatMessages }) => {
  const [content, setMessage] = useState({ message: '' });

  const { message } = content;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message === '') return;
    sendMessage({
      message: message,
      createdAt: new Date(),
      sender: 'user',
      _id: chatMessages.length + 1,
    });
    setMessage({ message: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setMessage({ [name]: value });
    console.log(message);
  };

  return (
    <div className='send-box'>
      <div className='send-container'>
        <form onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleChange}
            name='message'
            value={message}
            className='send-input'
            type='text'
            placeholder='Send Message'
          />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  chatMessages: state.chatData.chatMessages,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendBox);
