import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles["form-control"]}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="email@company.com" />
      </div>
      <button>Subscribe to monthly newsletter</button>
    </div>
  );
};
export default Form;
