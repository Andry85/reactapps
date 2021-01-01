import React, { useState } from 'react';
import styles from './App.module.scss';
import {calculator} from '../calculator';


import Screen from '../Screen';
import Panel from '../Panel';
import Operator from '../Operator';

function App() {

  const [val, setVal] = useState(0);

  const operators = ['c', '%', '+-', '/', '*', '+', '-', '='];
  const operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  function showValue(value) {
    let result = calculator(value);
    setVal(result);
  }



  const operatorsList = operators.map((item, index) =>
    <Operator key={index} name={item} clickHandler={showValue}/>
  );

  const operandsList = operands.map((item, index) =>
    <Operator key={index} name={item} clickHandler={showValue}/>
  );


  return (
    <div className={styles.App}>
      <Screen val = {val} />
      <Panel>
        <div className={styles.operands}>
          {operandsList}
        </div>
        <div className={styles.operators}>
          {operatorsList}
        </div>
      </Panel>
    </div>
  );
}

export default App;
