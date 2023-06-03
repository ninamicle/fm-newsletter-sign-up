import Card from "./components/Card";
import Form from "./components/Form";
import SuccessMessage from "./components/SuccessMessage";
import { useState } from "react";

import MainContent from "./components/MainContent";
import ResponsiveImage from "./components/ResponsiveImage";
import IllustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const handletEmail = (email) => {
    console.log(email);
    setEmail(email.email);
  };
  return (
    <div>
      {!email ? (
        <div>
          <Card bg={"card-bg"} container={"container"}>
            <div className="image">
              <ResponsiveImage
                mobileUrl={IllustrationMobile}
                desktopUrl={IllustrationDesktop}
              />
            </div>
          </Card>
          <Card>
            <div className="text">
              <MainContent></MainContent>
              <Form onSubmit={handletEmail} />
            </div>
          </Card>
        </div>
      ) : (
        <SuccessMessage email={email} />
      )}
    </div>
  );
}

export default App;
