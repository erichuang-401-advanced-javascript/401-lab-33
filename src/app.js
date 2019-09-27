import React from 'react';
import { CounterContext } from './components/counter-context/counter-context';

// import Counter from './components/counter/counter.js';
import Counter from './components/counter/counter-using-context.jsx';
import Incrementer from './components/incrementer/incrementer.jsx';
import Decrementer from './components/decrementer/decrementer.jsx';

export default class App extends React.Component {
  static contextType = CounterContext;
  render(){
    const { styles } = this.context;
    return (
      <div style={styles.container}>
        <Decrementer />
        <Counter />
        <Incrementer />
      </div>
    );
  }
}
