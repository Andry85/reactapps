import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SearchPanel.module.scss';




function SearchPanel(props) {
  
  const [val, setVal] = useState('flowers');
  const [photos, setPhotos] = useState([]);

  const [searchVal, setSearchVal] = useState('flowers');

  const changePhotos = (value) => {
    setVal(value)
  }

  const getPhotos = (value) => {
    setSearchVal(value)
  }

  useEffect(() => {

    console.log(props.currentPage);
    
    axios.get(`https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=${searchVal}&image_type=all&per_page=${props.toSearch}&page=${props.currentPage}`)
      .then(res => {
        const photos = res.data;
        setPhotos(photos);
        props.showResult(photos);
    })

    
  }, [searchVal, props.currentPage]);




  return (
    <div className={styles.SearchPanel}>
      <input 
        type="text" 
        value={val} 
        onChange = {(e) => changePhotos(e.target.value)}
      />
      <button
        onClick={() => getPhotos(val)}
      >
        Get the photos
      </button>
    </div>
  );
}

export default SearchPanel;
