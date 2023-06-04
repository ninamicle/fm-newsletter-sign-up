import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={styles.btn} type={props.type}>
      {props.text}
    </button>
  );
};
export default Button;
