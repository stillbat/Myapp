export const Button = ({ text, type }) => {
  if (type == "first") {
    return (
      <button
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "1px solid white",
          fontSize: "16px",
          color: "white",
          boxSizing: "border-box", width: "128px", height: "56px",
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
      }}
    >
      Get early access
    </button>
  );
};
