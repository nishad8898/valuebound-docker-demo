import React from 'react';
import './App.css';

import DATA from './DATA';

import ChatBox from './components/chat-box/chat-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATA,
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <div className='app'>
        <ChatBox data={data} />
      </div>
    );
  }
}

export default App;
