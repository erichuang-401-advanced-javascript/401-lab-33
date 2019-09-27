import React from 'react';
import {CounterContext} from "../counter-context/counter-context";

class Count extends React.Component {
  static contextType = CounterContext;
  render(){
    const { counter, styles } = this.context;
    return(
      <span style={styles.counter}>{counter}</span>
    )
  }
}

export default Count;
