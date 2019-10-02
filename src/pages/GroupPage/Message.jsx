import React from 'react';
import MessageForm from './MessageForm'
import "./Message.css"

const Message = (props) => {
  return (
    <div className="bg-light border padding">
    <div data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <p>
    <div class="d-flex w-100 justify-content-between" >
      <h5 class="mb-1">Title</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Subject</p>
    <small>Author</small>
    
    </p>
    </div>
    <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      <MessageForm />
    </div>
  </div>
  </div>
  )
}

export default Message;