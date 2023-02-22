/* eslint-disable no-restricted-globals */
import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
//import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
//import { useRecoilState } from "recoil";
//import { LoginState } from "../../RecoilState/LoginState/LoginState";
import Style from "./LogIn.module.css";
export default function LogIn() {
  //const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [password, setPassword] = useState("");
  const [mixed, setMixed] = useState("");
  const navigate = useNavigate();
  const [detailsMatched, setDetailsMatched] = useState([]);
 // const [isLogin , setIsLogin] = useRecoilState(LoginState)

  //fetching data from local storage
  //but test for if there is no data then what will happen
  let usersDetails = JSON.parse(localStorage.getItem("UsersDetails"));
  // console.log(usersDetails,"i am local storage data in login page")

  function passwordShow() {
    if (showing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleMixed(e) {
    setMixed(e.target.value);
  }

  function handleNext() {
    if (mixed === "") {
      alert("Please Fill You Email, Phone or Name");
    } else {
      let matchedUserData = usersDetails.filter(
        (element) =>
          element.Email === mixed ||
          element.Phone === mixed ||
          element.Name === mixed
      );
      // console.log(matchedUserData,"matchedUserData login page")
      if (matchedUserData.length !== 0) {
        setDetailsMatched(matchedUserData[0]);
        setShow(true);
      } else {
        alert("User Not Found ");
        // eslint-disable-next-line no-restricted-globals
        let userDecission = confirm(
          "You can press Ok to register yourself and you will be redirect to our registration page"
        );
        if (userDecission) {
          //setIsLogin(true)
          navigate("/signup");
        }
      }
    }
  }

  function handleLogin() {
    console.log(detailsMatched, "matched obj");
    if (detailsMatched.Password === password) {
      alert(`Hey! ${detailsMatched.Name} you are successfully LOGGED-IN`);
      localStorage.setItem("matchedUser" , JSON.stringify(detailsMatched))
      //setIsLogin(true)
      navigate("/home");
    } else {
      alert(
        "Not correct Password!! If you forgot your Password then try Forgot Password Option"
      );
    }
  }
  return (
    <div  className={Style.DialogWrapper} >
      <div className={Style.Dialog} 
      >
        <div className={Style.container}>
          <TwitterIcon
            className={Style.icon}
            fontSize="large"
            sx={{ color: "#00acee" }}
          />
          {show ? (
            <>
              <div className={Style.mainNextContainer}>
                <div className={Style.nextContainer}>
                  <h1 className={Style.heading}>Enter your password</h1>
                  <CustomInput
                    className={Style.inputUserName}
                    type="text"
                    placeholder=""
                    value={mixed}
                  />
                  <span>
                    <CustomInput
                      value={password}
                      onChange={handlePassword}
                      className={Style.inputUserName}
                      type={showing ? "text" : "password"}
                      placeholder="Password"
                    />
                    {password ? (
                      showing ? (
                        <AiOutlineEye
                        className={Style.eye}
                          onClick={passwordShow}
                          style={{ fontSize: "1.5rem" }}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                        className={Style.eye}
                          onClick={passwordShow}
                          style={{ fontSize: "1.5rem" }}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  <span className={Style.ForgotText}>Forgot Password ?</span>
                </div>

                <CustomButton
                  onClick={handleLogin}
                  className={password ? Style.btnLogin : Style.btnLoginDisable}
                  buttonText="Log in"
                />
              </div>
            </>
          ) : (
            <>
            
              <h1 className={Style.heading}>Sign in to Twitter</h1>
              <CustomButton
                className={Style.btn}
                buttonText="Sign in with Google"
                icon={<FcGoogle />}
              />
              <CustomButton
                className={Style.btn}
                buttonText="Sign in with Apple"
                icon={<BsApple />}
              />
              <span >
                ______<span className={Style.orLine}>______________</span>____<sub className={Style.or}> or </sub>
                ______<span className={Style.orLine}>____________</span>_____
              </span>
              <CustomInput
                value={mixed}
                onChange={handleMixed}
                className={Style.input}
                type="text"
                placeholder="Phone, email, or username"
              />
              <CustomButton
                className={Style.btnNext}
                onClick={handleNext}
                buttonText="Next"
              />
              <CustomButton
                className={Style.btn}
                buttonText="Forgot Password ?"
              />
            </>
          )}
          <p>
            Don’t have an account?{" "}
            <Link className={Style.link} to="/signup">
              Sign up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
