import IconList from "..//assets/images/icon-list.svg";
import styles from "./MainContent.module.css";

const MainContent = () => {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div>
      <h1 className={styles.title}>Stay updated!</h1>
      <p className={`${styles.paragraph} ${styles.description}`}>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className={styles.list}>
        {list.map((item) => (
          <li className={styles["list-item"]} key={Math.random()}>
            <img src={IconList} alt="Chevron up icon" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
