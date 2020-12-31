import styles from './Panel.module.scss';


function Panel(props) {

  return (
    <div className={styles.panel}>
      {props.children}
    </div>
  );
}

export default Panel;
