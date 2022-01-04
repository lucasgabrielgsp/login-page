import React from "react";
import "./style.scss";
import xtrategieLogo from "../../assets/logo_xtrategie.png";
import FormComponent from "../FormComponent/FormComponent";

function LoginBox() {
  return (
    <div className="box">
      <div className="box__logo">
        <img src={xtrategieLogo} alt="logo" />
      </div>
      <hr />
      <FormComponent />
    </div>
  );
}

export default LoginBox;
