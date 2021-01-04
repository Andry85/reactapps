import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import SearchPanel from '../SearchPanel';


function App() {

  const [results, setResults] = useState([]);
  
  const getdata = (value) => {
    setResults(value);
  }

  return (
    <div className={styles.App}>
      <SearchPanel
        showResult = {getdata}
      />

      {results.hits &&
        
        <ul className={styles.photos}>
          {results.hits.map((item, index) => (
              <li key={item.id}>
                <a href={item.largeImageURL}>
                  <img 
                  src={item.previewURL} 
                  width={item.previewWidth}
                  height={item.previewHeight}
                  />
                </a>
                
              </li>
          ))}
        </ul>

      }
    </div>
  );
}

export default App;
