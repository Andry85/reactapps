import React, { useState } from 'react';
import styles from './App.module.scss';
import SearchPanel from '../SearchPanel';
import Pagenator from '../Pagenator';


function App() {

  const [results, setResults] = useState([]);
  const per_page_images = 18;
  const [currentPage, setcurrentPage] = useState(1);


  const getdata = (value) => {
    setResults(value);
  }

  const setPager = (value) => {
    setcurrentPage(value);
  }

  

  return (
    <div className={styles.App}>
      <SearchPanel
        toSearch = {per_page_images}
        showResult = {getdata}
        currentPage = {currentPage}
      />

      {results.hits &&
        
        <ul className={styles.photos}>
          {results.hits.map((item, index) => (
              <li key={item.id}>
                <a 
                  href={item.largeImageURL}
                  target="_blank"
                >
                  <img 
                  src={item.previewURL} 
                  width={item.previewWidth}
                  height={item.previewHeight}
                  alt={item.tags}
                  />
                </a>
                
              </li>
          ))}
        </ul>

      }

      {results.totalHits &&
        <Pagenator 
          hits = {results.totalHits}
          per_pages = {per_page_images}
          setPager = {setPager}
         />
      }

    </div>
  );
}

export default App;
