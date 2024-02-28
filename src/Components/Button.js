import React from 'react';

function RollButton(props) {
  return (
    <div className="button-container">
      <input onClick={props.click} type="button" className="button" name="roll-button" value={props.roll}>
      </input>
    </div>
  )

}

export default RollButton;