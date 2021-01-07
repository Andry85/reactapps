import React, {useContext} from 'react';
import styles from './Row.module.scss';

import {ColorContext} from '../../index';


function Row(props) {

  const colorName = useContext(ColorContext);

  const onDelete = (id) => {
    props.onDelete(id)
  }

  const onEdit = (id, name, data) => {
    props.onEdit(id, name, data)
  }

  return (
    <div className={styles.row}>
      <h2 className={styles.row__name} style={{ color: colorName}}>{props.name}</h2>
      <div className={styles.row__data} style={{ color: colorName}}> {props.data}</div>
     
      <button 
        type="button" 
        className="btn btn-warning"
        onClick={() => onEdit(props.id, props.name, props.data)}
      >
        Edit
      </button>
      <button type="button" className="btn btn-danger"
        onClick={() => onDelete(props.id)}
      >Delete</button>

    </div>
  );
}

export default Row;
