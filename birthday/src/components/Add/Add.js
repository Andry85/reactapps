import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from './Add.module.scss';

import "react-datepicker/dist/react-datepicker.css";




function Add(props) {

  const [startDate, setStartDate] = useState(new Date());

  const [name, setName] = useState('');

 

  const setInfo = (name, startDate) => {
    props.setInfo(name, startDate);
    setName('');
    setStartDate(new Date());
  }

  return (
      <div className={styles.formWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter your name:</label>
                <input 
                  type="email"
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Your name"
                  value={name}

                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Put the birthday:</label>
                <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)}
                dateFormat="dd/MM/yyyy" 
                />
              </div>
              <div className="col-md-12">
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={() => setInfo(name, startDate)}
                >
                  + Add a person
                </button>
              </div>
            </div>
            
          </div>
      </div>
      
  );
}

export default Add;
