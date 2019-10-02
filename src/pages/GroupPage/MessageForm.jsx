import React from 'react';

const MessageForm = (props) => {
  return (
   
      <form>
      <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Reply" rows="3"></textarea>
  </div>
  <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
</form>
    
   
  )
}

export default MessageForm;