import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SearchPanel.module.scss';




function SearchPanel(props) {
  
  const [val, setVal] = useState('flowers');
  const [photos, setPhotos] = useState([]);

  const changePhotos = (value) => {
    setVal(value)
  }

  const getPhotos = (value) => {
    setVal(value)
  }

  useEffect(() => {
    
    axios.get(`https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=${val}&image_type=photo`)
      .then(res => {
        const photos = res.data;
        setPhotos(photos);
        props.showResult(photos);
    })

    
  }, [val]);




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
        Get photo
      </button>
    </div>
  );
}

export default SearchPanel;
