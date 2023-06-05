import Button from "./Button";
import styles from "./SuccessMessage.module.css";
const SuccessMessage = (props) => {
  return (
    <div className={styles["success-container"]}>
      <img
        className={styles["success-img"]}
        src={props.icon}
        alt="Success icon"
      />
      <h1 className={styles.title}>Thanks for subscribing!</h1>
      <p className={styles.paragraph}>
        A confirmation email has been sent to
        <span className={styles.email}>{props.email}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <Button type="button" text="Dismiss message" />
    </div>
  );
};
export default SuccessMessage;
