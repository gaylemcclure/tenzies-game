import React from 'react';
import Die from './Die';

function DieGroup(props) {
  return (
    <div>
      <div className="container">
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
      </div>
      <div className="container">
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
        <Die number={props.number}/>
      </div>
    </div>
  )
}

export default DieGroup;