import { Button } from "./button";
// import { Button } from "@mui/material";

const Texts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
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
          justifyContent: "space-between"
        }}
      >
        <p style={{ fontSize: "18px", color: "black" }}>Products</p>
        <p style={{ fontSize: "18px", color: "black" }}>Services</p>
        <p style={{ fontSize: "18px", color: "black" }}>Contact</p>
        <p style={{ fontSize: "18px", color: "black" }}>Log in</p>
        <button
          style={{
            backgroundColor: "transparent",
            fontsize: "16px",
            opacity: "52%",
            width: "84px"
          }}
        >
          {" "}
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
          top: "252px"
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
          left: "124px"
        }}
      >
        All in one for your remote team chats, collaboration and track projects
      </p>
    </div>
  );
};
// const Button = () => {
//   return (
//     <button
//       style={{
//         backgroundColor: "#0BBEF2",
//         padding: "16px",
//         color: "white",
//         top: "522px"
//       }}
//     >
//       Get early access
//     </button>
//   );
// };
const Input = () => {
  return (
    <input
      placeholder="Email me"
      style={{
        color: "grey",
        padding: "16px",
        color: "white",
        width: "316.92px",
        border: "1px"
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
          width: "100vw",
          backgroundImage:
            "url(data:image/jpeg;base64,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)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
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
          margin: "0px"
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
                alignItems: "center"
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
          <img
            src="/ootoMeetings1.jpg"
            style={{
              width: "1179px",
              height: "705px",
              borderRadius: "20px",
              border: "1px"
            }}
          />
        </div>
      </div>
    </div>
  );
}
