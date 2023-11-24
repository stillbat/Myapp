import { Button } from "./components/Button";
import BackgroundImage from "../public/brooke.png";
import { NavigationItem } from "./components/navigation-item";

import Image from "next/image"
import { NavigationBar } from "./components/NavigationBar";



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

const Input = () => {
  return (
    <input
      placeholder="Email me"
      style={{
        color: "grey",
        padding: "16px",
        width: "316.92px",
        border: "1px",
      }}
    ></input>
  );
};

export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          color: "white",
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex", paddingLeft: "124px", flexDirection: "column", paddingRight: "124px", paddingTop: "20px"
        }}
      >
        <NavigationBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
          <Texts2 />
          <div style={{ display: "flex", gap: "20px" }}>
            <Input />
            <Button />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F5F7FA",
          margin: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "140px", gap: "250px" }}>
          <div>
            <h1 style={{ fontSize: "48px", width: "398px", height: "120px" }}>
              Your Hub for teamwork
            </h1>
            <p style={{ fontSize: "18px", width: "465px", height: "145px" }}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <a
              style={{
                fontSize: "16px",
                width: "87",
                height: "28",
                display: "flex",
                alignItems: "center",
              }}
              href="/"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.1188 11.0039H5.10876C4.55876 11.0039 4.10876 11.4539 4.10876 12.0039C4.10876 12.5539 4.55876 13.0039 5.10876 13.0039H16.1188V14.7939C16.1188 15.2439 16.6588 15.4639 16.9688 15.1439L19.7488 12.3539C19.9388 12.1539 19.9388 11.8439 19.7488 11.6439L16.9688 8.85392C16.6588 8.53392 16.1188 8.76392 16.1188 9.20392V11.0039Z"
                  fill="#4DA0FD"
                />
              </svg>
            </a>
          </div>
          <Image src="/ootoMeetings1.png" height={705} width={579} alt="" />
        </div>
      </div>
    </div>
  );
}
