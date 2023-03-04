import "./App.css"
const App = () => {
  return (
    <div style={{ padding: "5rem" }}>
      <div className="bg-holder" style={{ zIndex: "-2" }}>
        <img className="background" src="./src/assets/logo.png" alt="" />
      </div>
      <h1 style={{ fontSize: "8rem", color: "orange" }}>
        RAMAERA INDUSTRIES LTD
      </h1>
      <h2 style={{ fontSize: "3rem", padding: " 2rem 0" }}>
        Received From ___________________
      </h2>
      <h2 style={{ fontSize: "3rem", padding: " 2rem 0" }}>
        We have Received the sum of rupee 1,000/- (ONE THOUSAND ONLY), for your
        common KYC
      </h2>
      <h3
        style={{
          color: "white",
          fontSize: "4rem",
          padding: " 2rem 0",
          backgroundColor: "green",
          textAlign: "center",
          border: "solid 2px black",
        }}
      >
        YOUR KYC HAS BEEN SUCCESSFULLY APPROVED{" "}
      </h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          style={{
            width: "200px",
          }}
          src="./src/assets/stamp.png"
          alt=""
        />
        <span style={{ width: "200px", textAlign: "center" }}>
          Authorized Stamp
        </span>
      </div>
    </div>
  )
}

export default App
