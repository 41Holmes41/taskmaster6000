import React from 'react';
import Message from './Message';

const MessageBoard = (props) => {
  return (
    <div className="container bg-light border border shadow p-3 mb-5">
      <h1>Message Board</h1>
      <div class="list-group">
        <Message />
      </div>

    </div>
  )
}

export default MessageBoard;