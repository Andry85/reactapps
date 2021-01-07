import React from 'react';
import styles from './App.module.scss';


import Header from "../Header";
import Panel from "../Panel";



function App() {


  return (
    <div className={styles.App}>
      <Header />
      <Panel/>
    </div>
  );
}

export default App;
