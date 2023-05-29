import Card from "./components/Card";
import MainContent from "./components/MainContent";
import ResponsiveImage from "./components/ResponsiveImage";
import IllustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import Bold from "./assets/fonts/Roboto-Bold.ttf";
import Regular from "./assets/fonts/Roboto-Regular.ttf";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card>
        <ResponsiveImage
          mobileUrl={IllustrationMobile}
          desktopUrl={IllustrationDesktop}
        />
      </Card>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
