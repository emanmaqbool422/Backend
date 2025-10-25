import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import aboutFour from "../assets/authImage.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const nameHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`User Name : ${username}`);
    setUsername("");
    console.log(`Email : ${email}`);
    setEmail("");
    console.log(`Password : ${password}`);
    setPassword("");
  };

  const handleSignUp = () => {
    // Check if all fields are filled
    if (username.trim() && email.trim() && password.trim()) {
      // Store in localStorage to communicate with Navbar
      localStorage.setItem('hideStartLearningButton', 'true');
      // Trigger a custom event to notify Navbar
      window.dispatchEvent(new CustomEvent('signupCompleted'));
      // Navigate to home page
      navigate("/");
    }
  };
  return (
    <>
      <div className="video-container" style={{minHeight: '100vh' }}>
        

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="form-conatiner"
          >
            <div className="right">
              <img
                src={aboutFour}
                alt="Astronaut"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 0 25px #ff2f75aa",
                }}
              />
            </div>
            <div className="left">
              <div className="header">
                <div className="underline">{action}</div>
              </div>

              <div className="inputs">
                {action === "Login" ? (
                  <div></div>
                ) : (
                  <div className="input">
                    <input
                      value={username}
                      onChange={nameHandler}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                )}

                <div className="input">
                  <input
                    value={email}
                    onChange={emailHandler}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input password-input">
                  <input
                    value={password}
                    onChange={passwordHandler}
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />

                  <FontAwesomeIcon
                    className="icons"
                    icon={show ? faEye : faEyeSlash}
                    onClick={() => setShow(!show)}
                  />
                </div>
              </div>

              <div
                className="submit-container"
                onSubmit={(e) => {
                  submitHandler(e);
                }}
              >
                <button
                  type="submit"
                  className={action === "Login" ? "button gray" : "button"}
                  onClick={() => {
                    setAction("Sign Up");
                    handleSignUp();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage
