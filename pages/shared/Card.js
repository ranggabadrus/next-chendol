import React from "react";

export default function Card({ title, desc, image, color, button }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        height: "100%",
        backgroundColor: color,
        color: "#fff",
        borderRadius: "10px",
        padding: "30px 10px",
      }}
    >
      <div>
        <h3>{title}</h3>
        <div>
          <div>{desc}</div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50px",
            padding: "10px",
            color: color,
            display: "inline-block",
          }}
        >
          <b>{button}</b>
        </div>
      </div>
      <div>
        <img height="100px" src="" />
      </div>
    </div>
  );
}
