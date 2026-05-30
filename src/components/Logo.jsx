import logo from "../assets/IMG_9898.png";

export function LogoIcon({ width = 200 }) {
  return (
    <img
      src={logo}
      alt="Lifeline Consultancy"
      style={{
        width: `${width}px`,
        height: "300px",
        objectFit: "contain",
        display: "block",
        marginTop: "10px",
      }}
    />
  );
}

export function Logo({ width = 200 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "72px",
        paddingTop: "10px",
      }}
    >
      <LogoIcon width={width} />
    </div>
  );
}
