import React from 'react';

function Counter(props) {
  return (
    <div>
      <div className="counter_container">
        <div className="counter">
          <h1 className="counter_text">{props.count}</h1>
        </div>
      </div>
    </div>
  )
}

export default Counter;