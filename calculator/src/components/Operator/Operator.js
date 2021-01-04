import styles from './Operator.module.scss';


function Operator(props) {
  return (
    <button className={styles.operator} onClick={() => props.clickHandler(props.name)}>
        {props.name}
    </button>
  );
}

export default Operator;