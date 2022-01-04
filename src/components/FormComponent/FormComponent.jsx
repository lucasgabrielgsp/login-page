import {
  Button,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { loginRequest } from "../../store/action";
import { connect } from "react-redux";
import "./style.scss";

const initialFieldData = {
  email: "",
  password: "",
};

function FormComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldData, setFieldData] = useState(initialFieldData);

  const handleFieldData = (e) => {
    setFieldData({
      ...fieldData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = fieldData;
    try {
      await props.loginRequest({
        email: email,
        password: password,
      });
      setFieldData(initialFieldData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="login">
      <p>Faça seu login</p>
      <div className="login__boxform">
        <FormControl variant="filled">
          <InputLabel>E-mail</InputLabel>
          <FilledInput
            id="filled-basic"
            name="email"
            type="text"
            value={fieldData.email}
            onChange={handleFieldData}
          />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel>Password</InputLabel>
          <FilledInput
            id="filled-basic__password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={fieldData.password}
            onChange={handleFieldData}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <Button variant="outlined" className="login__btn" onClick={handleSubmit}>
        ENTRAR
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (data) => dispatch(loginRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
