import Search from "./Search";

function Navbar({ topAlbums }) {
  return (
    <div
      style={{
        padding: "16px 40px",
        backgroundColor: "#34C94B",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <h2 style={{ margin: 0 }}>QTify</h2> */}
      <img
          src={require("../assets/Logo.png")}
          width={67}
          height={34}
          top = {20}
          left = {32}
          alt="QtifyLogo"
        />

      <Search
        searchData={topAlbums}
        width={568}
        height={48}
        placeholder="Search an album of your choice"
      />

      <button
        style={{
          background: "black",
          color: "#34C94B",
          padding: "8px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Give Feedback
      </button>
    </div>
  );
}

export default Navbar;