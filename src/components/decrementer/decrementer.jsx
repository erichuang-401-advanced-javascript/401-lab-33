import React, { useContext } from 'react';
import { CounterContext } from '../counter-context/counter-context';

function Decrementer (props) {
  const context = useContext(CounterContext);
  return(
      <button style={context.styles.button} onClick={context.decrement}> - </button>
    );
}

export default Decrementer;
