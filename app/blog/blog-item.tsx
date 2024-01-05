import Image from "next/image";

export const Blogitem = ({
  title,
  description,
  firstimage,
  avatarimage,
  name,
  date,
}: {
  title: string;
  description: string;
  firstimage: string;
  avatarimage: string;
  name: string;
  date: string;
}) => {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <div
        style={{
          height: "440px",
          width: "363px",
          backgroundColor: "white",
          borderRadius: "30px",
          overflow: "hidden",
          gap: "50px",
        }}
      >
        <Image src={firstimage} width={370} height={147} alt="" />
        <div
          style={{
            paddingLeft: "24px",
            paddingBottom: "19px",
            paddingTop: "10px",
          }}
        >
          <p style={{ fontSize: "24px", width: "330px", height: "58px" }}>
            {title}
          </p>

          <p style={{ paddingTop: "25px", paddingBottom: "57px" }}>
            {description}
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Image src={avatarimage} width={45} height={45} alt="" />
            <p>{name}</p>
            <p>|</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
