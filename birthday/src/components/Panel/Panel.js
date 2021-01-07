import React, {useState} from 'react';
import styles from './Panel.module.scss';

import Row from "../Row";
import Add from "../Add";

const people = [
  {
    id: 0,
    name: 'Oleg',
    data: '15.10.1988'
  },
  {
    id: 1,
    name: 'Ivan',
    data: '13.09.1978'
  },
  {
    id: 2,
    name: 'Igor',
    data: '05.02.1977'
  },
  {
    id: 3,
    name: 'Oleg',
    data: '15.10.1988'
  },
  {
    id: 4,
    name: 'Ivan',
    data: '13.09.1978'
  },
  {
    id: 5,
    name: 'Igor',
    data: '05.02.1977'
  }
];



function Panel() {

  const [humans, setHumans] = useState(people);
  const [startDate, setStartDate] = useState(new Date());
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null);
  const [actionName, setActionName] = useState('+ Add a person');

  const setInfo = (name, startDate) => {
    console.log(name);
    console.log(startDate);

    let day = startDate.getDate();
    let month = startDate.getMonth() + 1;
    let year = startDate.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }


    setHumans(prevVal => {

      if (actionName === 'Edit the person') {

        return [
          ...prevVal.slice(0, userId),
          {
            id: userId,
            name: name,
            data: `${day}.${month}.${year}`
          },
          ...prevVal.slice(userId + 1)
        ];

      } else {
        return [
          ...prevVal,
          {
            id: prevVal.length,
            name: name,
            data: `${day}.${month}.${year}`
          }
        ];
      }

     

    });

    setActionName('+ Add a person');

    console.log(userId);


  }

  const onDelete = (id) => {
    setHumans(prevVal => {

      const newArr = prevVal.filter((item) => item.id !== id);

      return newArr;
    });
  }

  const onEdit = (id, name, data) => {
    setUserName(name);
    setUserId(id)
    
    const dataArr = data.split('.');
    const [day, month, year] = dataArr;
    let d = new Date();
    d.setDate(day);
    d.setMonth(month-1);
    d.setFullYear(year);


    setStartDate(d);

    setActionName('Edit the person');

    console.log(userId);

  

  }

  const setStartDateFun = (value) => {
    setStartDate(value);
  }

  const setUserNameFun = (value) => {
    setUserName(value);
  }



  return (
    <div className={styles.panel}>

      {humans.map((person, index) =>
        <div key={person.id}>
          <Row
           id = {person.id}
           name = {person.name}
           data = {person.data}
           onDelete = {onDelete}
           onEdit  = {onEdit}
          />
        </div>
      )}

      <Add 
        setInfo={setInfo}
        setStartDate = {setStartDateFun}
        setUserName = {setUserNameFun}
        startDate = {startDate}
        userName = {userName}
        actionName = {actionName}
      />
      
      

    </div>
  );
}

export default Panel;
