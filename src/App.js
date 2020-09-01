import React from "react";
import "./styles.css";
import MySwaggerUI from "./SwaggerUI/MySwaggerUI";

export default function App() {
  return (
    <div className="App">
      <MySwaggerUI doc="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
}
