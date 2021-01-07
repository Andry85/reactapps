import React from 'react';
import styles from './Row.module.scss';




function Row(props) {

  const onDelete = (id) => {
    props.onDelete(id)
  }

  const onEdit = (id) => {
    props.onEdit(id)
  }

  return (
    <div className={styles.row}>
      <h2 className={styles.row__name}>{props.name}</h2>
      <div className={styles.row__data}> {props.data}</div>
     
      <button 
        type="button" 
        className="btn btn-warning"
        onClick={() => onEdit(props.id)}
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
