import { Button } from "./components/button";
import BackgroundImage from "../public/brooke.png";
import { NavigationItem } from "./components/navigation-item";
import Image from "next/image";

const Texts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <svg
        width="85"
        height="22"
        viewBox="0 0 85 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97 21.33C6.99 21.33 5.5 20.84 4.5 19.86C3.5 18.86 3 17.37 3 15.39V9.18H0.12V5.79H3V2.07L7.53 0.959999V5.79H11.43V9.18H7.53V15.15C7.53 16.11 7.73 16.77 8.13 17.13C8.53 17.49 9.04 17.67 9.66 17.67C10.04 17.67 10.35 17.65 10.59 17.61C10.85 17.55 11.12 17.47 11.4 17.37V20.88C11.02 21.04 10.62 21.15 10.2 21.21C9.78 21.29 9.37 21.33 8.97 21.33ZM21.258 21.33C18.618 21.33 16.558 20.62 15.078 19.2C13.598 17.78 12.858 15.85 12.858 13.41C12.858 11.83 13.168 10.45 13.788 9.27C14.428 8.09 15.308 7.17 16.428 6.51C17.568 5.83 18.898 5.49 20.418 5.49C21.918 5.49 23.168 5.81 24.168 6.45C25.188 7.09 25.948 7.99 26.448 9.15C26.968 10.29 27.228 11.62 27.228 13.14V14.19H16.578V11.94H23.928L23.418 12.36C23.418 11.1 23.158 10.15 22.638 9.51C22.138 8.85 21.408 8.52 20.448 8.52C19.388 8.52 18.568 8.91 17.988 9.69C17.428 10.47 17.148 11.59 17.148 13.05V13.53C17.148 15.01 17.508 16.11 18.228 16.83C18.968 17.55 20.028 17.91 21.408 17.91C22.228 17.91 22.998 17.81 23.718 17.61C24.458 17.39 25.158 17.05 25.818 16.59L27.078 19.59C26.318 20.15 25.438 20.58 24.438 20.88C23.458 21.18 22.398 21.33 21.258 21.33ZM36.0122 21.33C34.6922 21.33 33.5322 21.01 32.5322 20.37C31.5322 19.73 30.7522 18.82 30.1922 17.64C29.6322 16.46 29.3522 15.04 29.3522 13.38C29.3522 11.74 29.6322 10.33 30.1922 9.15C30.7522 7.97 31.5322 7.07 32.5322 6.45C33.5322 5.81 34.6922 5.49 36.0122 5.49C37.2322 5.49 38.3222 5.79 39.2822 6.39C40.2622 6.97 40.9022 7.76 41.2022 8.76H40.8722L41.2322 5.79H45.5822C45.5222 6.45 45.4622 7.12 45.4022 7.8C45.3622 8.46 45.3422 9.11 45.3422 9.75V21H40.8422L40.8122 18.15H41.1722C40.8522 19.11 40.2122 19.88 39.2522 20.46C38.2922 21.04 37.2122 21.33 36.0122 21.33ZM37.3922 17.91C38.4322 17.91 39.2722 17.54 39.9122 16.8C40.5522 16.06 40.8722 14.92 40.8722 13.38C40.8722 11.84 40.5522 10.71 39.9122 9.99C39.2722 9.27 38.4322 8.91 37.3922 8.91C36.3522 8.91 35.5122 9.27 34.8722 9.99C34.2322 10.71 33.9122 11.84 33.9122 13.38C33.9122 14.92 34.2222 16.06 34.8422 16.8C35.4822 17.54 36.3322 17.91 37.3922 17.91ZM49.0573 21V9.75C49.0573 9.11 49.0373 8.46 48.9973 7.8C48.9573 7.12 48.8973 6.45 48.8173 5.79H53.1673L53.4973 8.61H53.1373C53.5773 7.65 54.2273 6.89 55.0873 6.33C55.9473 5.77 56.9673 5.49 58.1473 5.49C59.3073 5.49 60.2773 5.77 61.0573 6.33C61.8573 6.87 62.4273 7.72 62.7673 8.88H62.2873C62.7273 7.84 63.4273 7.02 64.3873 6.42C65.3473 5.8 66.4373 5.49 67.6573 5.49C69.3773 5.49 70.6573 6 71.4973 7.02C72.3373 8.04 72.7573 9.64 72.7573 11.82V21H68.2273V11.97C68.2273 10.91 68.0573 10.15 67.7173 9.69C67.3773 9.23 66.8273 9 66.0673 9C65.1673 9 64.4573 9.32 63.9373 9.96C63.4173 10.6 63.1573 11.48 63.1573 12.6V21H58.6273V11.97C58.6273 10.91 58.4573 10.15 58.1173 9.69C57.7773 9.23 57.2273 9 56.4673 9C55.5673 9 54.8573 9.32 54.3373 9.96C53.8373 10.6 53.5873 11.48 53.5873 12.6V21H49.0573Z"
          fill="white"
        />
        <path d="M76.8833 21V13.32H84.6593V21H76.8833Z" fill="#0BBEF2" />
      </svg>
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        <NavigationItem href="/">Products</NavigationItem>
        <NavigationItem href="/">Services</NavigationItem>
        <NavigationItem href="/">Contact</NavigationItem>
        <NavigationItem href="/">Log in</NavigationItem>
        <button
          style={{
            backgroundColor: "transparent",
            fontSize: "16px",
            opacity: "52%",
            width: "84px",
          }}
        >
          Get access
        </button>
      </div>
    </div>
  );
};

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
        }}
      >
        <Texts />
        <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div style={{ display: "flex", alignItems: "center" }}>
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
                size: "16px",
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
          <Image src="/brooke.png" height={500} width={500} alt="" />
        </div>
      </div>
    </div>
  );
}
