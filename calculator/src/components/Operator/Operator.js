import styles from './Operator.module.scss';


function Operator(props) {


  return (
    <button className={styles.operator}>
        {props.name}
    </button>
  );
}

export default Operator;
