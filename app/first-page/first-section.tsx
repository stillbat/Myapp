import { Button } from "../components/button";
import { NavigationBar } from "../components/navigation-bar";
import BackgroundImage from "../../public/brooke.png";
import { Input } from "../components/input";

const Texts2 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          fontSize: "48px",
          width: "514px",
          height: "120px",
          top: "252px",
        }}
      >
        Instant collaborations for remote teams
      </p>
      <p
        style={{
          fontSize: "18px",
          width: "323.85px",
          top: "394px",
          height: "58px",
          left: "124px",
        }}
      >
        All in one for your remote team chats, collaboration and track projects
      </p>
    </div>
  );
};

export const FirstSection = () => {
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        paddingLeft: "124px",
        flexDirection: "column",
        paddingRight: "124px",
        paddingTop: "20px",
      }}
    >
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Texts2 />
        <div style={{ display: "flex", gap: "20px" }}>
          <Input />
          <Button />
        </div>
      </div>
    </div>
  );
};
