import Card from "./components/Card";
import MainContent from "./components/MainContent";
import ResponsiveImage from "./components/ResponsiveImage";
import IllustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import "./App.css";

function App() {
  return (
    <Card bg={"card-bg"} container={"container"}>
      <div className="image">
        <ResponsiveImage
          mobileUrl={IllustrationMobile}
          desktopUrl={IllustrationDesktop}
        />
      </div>
      <div className="text">
        <MainContent></MainContent>
      </div>
    </Card>
  );
}

export default App;
