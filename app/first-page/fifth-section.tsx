import Image from "next/image";
import { StarRating } from "./star";
import { Container } from "../components/container";

export const FifthSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7FA",
        paddingTop: "170px",
        paddingBottom: "150px",
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "48px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          What people say about us
        </h1>
      </Container>
      <div
        style={{
          paddingTop: "120px",
          margin: "0px",
          display: "flex",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingLeft: "140px",
            paddingRight: "140px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: "30px",
                paddingTop: "60px",
                paddingBottom: "100px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "40px",
                  filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
                  width: "286px",
                  height: "294px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <StarRating count={4} />
                  <p
                    style={{
                      fontSize: "18px",
                      width: "291px",
                      height: "154px",
                    }}
                  >
                    Give everyone you work with—inside and outside your emoji,
                    keep conversations focused in channels, and simplify all
                    your communication into one place.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src="/Ellipse.jpg" height={56} width={56} alt="" />
                  <p>Amy Klassen</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "40px",
                  filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
                  width: "286px",
                  height: "294px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <StarRating count={4} />
                  <p
                    style={{
                      fontSize: "18px",
                      width: "291px",
                      height: "154px",
                    }}
                  >
                    Give everyone you work with—inside and outside your emoji,
                    keep conversations focused in channels, and simplify all
                    your communication into one place.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src="/Ellipse.jpg" height={56} width={56} alt="" />
                  <p>Amy Klassen</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "40px",
                  filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
                  width: "286px",
                  height: "294px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <StarRating count={4} />
                  <p
                    style={{
                      fontSize: "18px",
                      width: "291px",
                      height: "154px",
                    }}
                  >
                    Give everyone you work with—inside and outside your emoji,
                    keep conversations focused in channels, and simplify all
                    your communication into one place.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src="/Ellipse.jpg" height={56} width={56} alt="" />
                  <p>Amy Klassen</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "40px",
                  filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
                  width: "286px",
                  height: "294px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <StarRating count={4} />
                  <p
                    style={{
                      fontSize: "18px",
                      width: "291px",
                      height: "154px",
                    }}
                  >
                    Give everyone you work with—inside and outside your emoji,
                    keep conversations focused in channels, and simplify all
                    your communication into one place.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src="/Ellipse.jpg" height={56} width={56} alt="" />
                  <p>Amy Klassen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
