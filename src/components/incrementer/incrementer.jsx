import React from 'react';
import { CounterContext } from '../counter-context/counter-context';

function Incrementer (props) {
  return (
    <CounterContext.Consumer>
      {(context) => {
        return(
          <button style={context.styles.button} onClick={context.increment}> + </button>
        )
      }}
    </CounterContext.Consumer>
  )
}

export default Incrementer;
