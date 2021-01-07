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

      return [
        ...prevVal,
        {
          id: prevVal.length,
          name: name,
          data: `${day}.${month}.${year}`
        }
      ];
    });
  }

  const onDelete = (id) => {
    setHumans(prevVal => {

      const newArr = prevVal.filter((item) => item.id !== id);

      return newArr;
    });
  }

  const onEdit = (id) => {

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
        name = {actionName}
      />
      
      

    </div>
  );
}

export default Panel;
