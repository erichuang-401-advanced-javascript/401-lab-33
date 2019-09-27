import React, { createContext } from 'react';

export const CounterContext = React.createContext();

class CounterContextProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
      increment : this.incrementer,
      decrement : this.decrementer,
      styles : {
        container: {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '40%',
        },
        counter: {
          display: 'inline-block',
          fontSize: '1em',
          border: '2px solid #444',
          borderRadius: '50%',
          lineHeight: '5em',
          textAlign: 'center',
          width: '5em',
        },
        button: {
          height: '3em',
        },
      }
    }
  }

  incrementer = () => {
    this.setState((prevState) => ({
      counter : prevState.counter + 1
    }));
  };

  decrementer = () => {
    this.setState((prevState) => ({
      counter : prevState.counter - 1
    }))
  };

  render(){
    return(
      <CounterContext.Provider value={{...this.state}}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default CounterContextProvider;
