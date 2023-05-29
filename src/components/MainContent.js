import Card from "./Card";
import Form from "./Form";
import IconList from "..//assets/images/icon-list.svg";
import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <Card>
      <div>
        <h1 className="title">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li key={Math.random()}>
            <img src={IconList} alt="Chevron up icon" /> Product discovery and
            building what matters
          </li>
          <li key={Math.random()}>
            <img src={IconList} alt="Chevron up icon" /> Measuring to ensure
            updates are a success
          </li>
          <li key={Math.random()}>
            <img src={IconList} alt="Chevron up icon" />
            And much more!
          </li>
        </ul>
      </div>

      <div>
        <Form />
      </div>
    </Card>
  );
};

export default MainContent;
