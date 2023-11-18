export const Button = ({ text, type }) => {
  if (type == "first") {
    return (
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
    );
  }

  return (
    <button
      style={{
        backgroundColor: "#0BBEF2",
        padding: "16px",
        color: "white",
        top: "522px",
      }}
    >
      Get early access
    </button>
  );
};
