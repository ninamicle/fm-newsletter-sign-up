import { useEffect, useReducer } from "react";
import styles from "./Form.module.css";
import Button from "./Button";

let initialState = { email: "", validEmail: true };
const emailReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        validEmail: action.payload.trim().includes("@") ? true : false,
      };
    case "RESET_EMAIL":
      return { ...state, email: initialState.email };
    default:
      return state;
  }
};

const Form = (props) => {
  const [state, dispatchEmail] = useReducer(emailReducer, initialState);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log(state.email, "effect");
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [state.email]);

  const handlerEmailChage = (event) => {
    dispatchEmail({ type: "SET_EMAIL", payload: event.target.value });
  };

  const handleSuccessMessage = (event) => {
    event.preventDefault();
    props.onSubmit(state);
    dispatchEmail({ type: "RESET_EMAIL" });
  };

  return (
    <form className={styles.form} onSubmit={handleSuccessMessage}>
      <div className={styles["form-control"]}>
        <div className={styles.label}>
          <label htmlFor="email">Email address</label>
          {state.validEmail ? null : (
            <span className={styles["invalid-msg"]}>Valid email required</span>
          )}
        </div>
        <input
          type="email"
          id="email"
          value={state.email}
          placeholder="email@company.com"
          onChange={handlerEmailChage}
          className={state.validEmail ? "" : styles.invalid}
        />
      </div>
      <Button type="submit" text="Subscribe to monthly newsletter" />
    </form>
  );
};
export default Form;
