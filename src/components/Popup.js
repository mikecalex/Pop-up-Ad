import React from 'react';

const Popup = props => {

  let handleExit = () => {
    confirm("Are you sure you don't want to see " + props.artist + '?')
  }

  let handleSubmit = () => {
    event.preventDefault();
    window.alert("Form Submitted!")
  }

  return(
    <div>
      <div id='button' onClick = {handleExit}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>

      <div>
        <h1>You have won tickets to see {props.artist}!!</h1>
        <h6>Please enter your email so we can send you the tickets</h6>
      </div>

      <div>
        <form>

          <input type='text' id='email' value='Your email here'/>
          <input type='submit' value='Claim Your Prize!' onClick= {handleSubmit}/>
        </form>
      </div>
    </div>
  );
};

export default Popup;
