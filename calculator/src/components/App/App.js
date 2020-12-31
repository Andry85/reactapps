import styles from './App.module.scss';
import Button from '@material-ui/core/Button';

import Screen from '../Screen';
import Panel from '../Panel';
import Operator from '../Operator';

function App() {

  const operators = ['c', '%', '+-', '/', '*', '+', '-', '='];
  const operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  const operatorsList = operators.map((item, index) =>
    <Operator key={index} name={item}/>
  );

  const operandsList = operands.map((item, index) =>
    <Operator key={index} name={item}/>
  );


  return (
    <div className={styles.App}>
      <Screen/>
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
