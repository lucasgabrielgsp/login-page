/* eslint-disable */
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

const initialErrors = {
  email: false,
  password: false,
};

function FormComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldData, setFieldData] = useState(initialFieldData);
  const [errors, setErrors] = useState(initialErrors);

  const handleFieldData = (e) => {
    setErrors(initialErrors);
    setFieldData({
      ...fieldData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    const { email, password } = fieldData;
    if (email.length && password.length) {
      try {
        await props.loginRequest({
          email: email,
          password: password,
        });
        setFieldData(initialFieldData);
      } catch (error) {
        console.log(error);
      }
    } else {
      if(email.length === 0){
        setErrors({
          ...errors,
          email: true
        });
      }
      if(password.length === 0){
        setErrors({
          ...errors,
          password: true,
        });
      }
      if(email.length === 0 && password.length === 0){
        setErrors({
          ...errors,
          email:true,
          password: true,
        });
      }
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
        <FormControl variant="filled" required error={errors.email}>
          <InputLabel>E-mail</InputLabel>
          <FilledInput
            id="filled-basic"
            name="email"
            type="text"
            value={fieldData.email}
            onChange={handleFieldData}
            required
          />
        </FormControl>
        <FormControl variant="filled" required error={errors.password}>
          <InputLabel>Password</InputLabel>
          <FilledInput
            id="filled-basic__password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={fieldData.password}
            onChange={handleFieldData}
            required
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
      <Button
        variant="outlined"
        className="login__btn"
        onClick={handleSubmit}
        disabled={errors.email || errors.password ? true : false}
      >
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
