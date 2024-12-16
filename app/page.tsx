import BusinessCardSVG from "./components/BusinessCardSVG";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BusinessCardSVG />
      </div>
    </div>
  );
}
