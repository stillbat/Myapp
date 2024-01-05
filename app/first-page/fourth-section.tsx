import Image from "next/image";
import { Container } from "../components/container";

export const FourthSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7FA",
        margin: "0px",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Container>
        <div style={{ position: "absolute", right: -0 }}>
          <Image src="/brooke3.png" height={567} width={562} alt="" />
        </div>
        <div
          style={{
            maxWidth: "100vw",
            height: "675px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "140px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "48px", width: "398px", height: "120px" }}>
              Scheduling that actually works
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
              href="/blog"
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
        </div>
      </Container>
    </div>
  );
};
