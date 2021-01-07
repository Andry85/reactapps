import React, {useContext } from 'react';
import styles from './App.module.scss';

import {ColorContext} from '../../index';

import Header from "../Header";
import Panel from "../Panel";



function App() {

  const bgColorName = useContext(ColorContext);

  return (
    <div className={styles.App} style={{ color: bgColorName}}>
      <Header />
      <Panel/>
    </div>
  );
}

export default App;
