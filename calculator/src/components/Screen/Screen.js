import styles from './Screen.module.scss';


function Screen(props) {

  let input;

  if (props.val === '') {
    input = <input readOnly type="text" value="0" />;
  } else {
    input = <input readOnly type="text" value={props.val} />;
  }

  return (
    <div className={styles.screen}>
      {input}
    </div>
  );
}

export default Screen;
