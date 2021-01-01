import styles from './Screen.module.scss';


function Screen(props) {

  return (
    <div className={styles.screen}>
      <input 
        type="text" 
        value={props.val}
      />
    </div>
  );
}

export default Screen;
