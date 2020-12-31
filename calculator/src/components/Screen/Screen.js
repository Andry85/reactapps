import React, { useState } from 'react';
import styles from './Screen.module.scss';


function Screen() {

  const [val, setVal] = useState(0);

  return (
    <div className={styles.screen}>
      <input 
        onChange={e => {
          const val = e.target.value;
          setVal(val)
        } }
        type="text" 
        value={val}
      />
    </div>
  );
}

export default Screen;
