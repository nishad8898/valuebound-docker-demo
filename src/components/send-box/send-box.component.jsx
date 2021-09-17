import React from 'react';
import './send-box.styles.scss';

import DATA from '../../DATA';

import FormInput from '../../form-input/form-input.component';

class SendBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    DATA.push({
      message: 'lola',
      createdAt: new Date(),
      sender: 'user',
      _id: DATA.length + 1,
    });
  };

  render() {
    return (
      <div className='send-box'>
        <div className='send-container'>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              className='send-input'
              type='text'
              placeholder='Send Message'
            />
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SendBox;
