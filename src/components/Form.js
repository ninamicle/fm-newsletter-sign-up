import { useEffect, useReducer } from "react";
import styles from "./Form.module.css";

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
        <label htmlFor="email">
          Email address
          {state.validEmail ? null : <span>Valid email required</span>}
        </label>
        <input
          type="email"
          id="email"
          value={state.email}
          placeholder="email@company.com"
          onChange={handlerEmailChage}
          className={state.validEmail ? "" : styles.invalid}
        />
      </div>
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};
export default Form;
