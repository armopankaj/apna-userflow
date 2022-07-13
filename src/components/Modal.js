import React from "react";
import Form from "./Form";
import "./modal.css";

export default function Modal() {
  //Creating a react portal which renders it separately
  //ReactDom.createortal();
  return (
    <div className="background">
      <div className="Modal">
        <Form />
      </div>
    </div>
  );
}
