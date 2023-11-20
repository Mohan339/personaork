// App.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counter';
import {Parent} from './props/Parent';

const App = ({ count, increment, decrement , message}) => (
  <div>
    <h1>Counter: {count}</h1>
    <p>{message}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
 
  <Parent/>
  </div>
);

const mapStateToProps = (state) => ({
  
  count: state.count,
  message:state.message
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
