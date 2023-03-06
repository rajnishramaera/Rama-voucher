import { useState } from "react"

const App = () => {
  const [digit, setDigit] = useState(1000)
  const [words, setWords] = useState("ONE THOUSAND")
  const commafy = (num) => {
    if (num === 1000) {
      return "1,000"
    }
    if (num === 10000) {
      return "10,000"
    }
    if (num === 100000) {
      return "1,00,000"
    }
  }
  return (
    <div className="wrapper">
      <h1
        style={{
          width: "1000px",
          fontSize: "5.6rem",
          color: "orange",
          textAlign: "left",
        }}
      >
        RAMAERA INDUSTRIES LTD
      </h1>
      <h2 style={{ fontSize: "2.4rem", padding: " 2.4rem 0" }}>
        Received From ___________________
      </h2>
      <h2 style={{ fontSize: "2.6rem", padding: " 2rem 0 0 0" }}>
        We have Received the sum of rupee{" "}
        <span style={{ color: "red" }}>
          {commafy(digit)}/- ({words} ONLY)
        </span>
        ,
      </h2>
      <h2 style={{ fontSize: "2.6rem", padding: "  0 0 2rem 0" }}>
        for your common KYC
      </h2>
      <h3
        style={{
          width: "780px",
          color: "white",
          fontSize: "2.8rem",
          padding: " 0.6rem 0",
          backgroundColor: "green",
          textAlign: "center",
          border: "solid 2px black",
        }}
      >
        YOUR KYC HAS BEEN SUCCESSFULLY APPROVED{" "}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "right",
          flexDirection: "column",
          margin: " 0 0 0 600px",
        }}
      >
        <img
          style={{
            width: "200px",
            transform: "scale(80%)",
          }}
          src="./src/assets/stamp.png"
          alt=""
        />
        <span
          style={{
            width: "200px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          Authorized Stamp
        </span>
      </div>
    </div>
  )
}

export default App
