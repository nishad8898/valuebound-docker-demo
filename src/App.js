import React from 'react';
import './App.css';

import ChatBox from './components/chat-box/chat-box.component';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { chatMessages } = this.props;
    console.log(chatMessages);

    return (
      <div className='app'>
        <ChatBox data={chatMessages} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chatMessages: state.chatData.chatMessages,
});

export default connect(mapStateToProps)(App);
