import Card from "./components/Card";
import Form from "./components/Form";
import SuccessMessage from "./components/SuccessMessage";
import { Fragment, useState } from "react";

import MainContent from "./components/MainContent";
import ResponsiveImage from "./components/ResponsiveImage";
import IllustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-success.svg";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const handletEmail = (email) => {
    console.log(email);
    setEmail(email.email);
  };
  return (
    <Fragment>
      {!email ? (
        <Card>
          <div className="image">
            <ResponsiveImage
              mobileUrl={IllustrationMobile}
              desktopUrl={IllustrationDesktop}
            />
          </div>
          <div className="text">
            <MainContent></MainContent>
            <Form onSubmit={handletEmail} />
          </div>
        </Card>
      ) : (
        <Card>
          <SuccessMessage email={email} icon={iconList} />
        </Card>
      )}
    </Fragment>
  );
}

export default App;
