import styled from "styled-components";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   // Call the server
  //   console.log("Submitted!!");
  // }

  // Initialize a boolean state
  const [passwordShown1, setPasswordShown1] = useState(false);

  // Password toggle handler
  const togglePassword1 = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown1(!passwordShown1);
  };
  const {loginUser, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email_id:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

    return (
      <LogiSection className="rectsec">
            <div className="rect">
              <img src="images/Travinfo1.png" alt="" className="imgp" />
              <div className="login">
                <form onSubmit={submitForm} className="rounded px-8 pt-6 pb-8 mb-4">
                  <h1 className="logint">Login</h1>
                  <div className="ip mb-4">
                    {/* <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    ></label> */}
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email_id"
                      type="email"
                      name="email_id"
                      placeholder="Email"
                      onChange={onChangeInput}
                      value={formData.email_id}
                    />
                  </div>
                  <div className="ip relative mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type= {passwordShown1 ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      onChange={onChangeInput}
                      value={formData.password}
                    />
                    <span className="absolute right-0 inset-y-0 flex items-center pl-3 mr-3">
                      <Eye
                        className="bth h-5 w-5"
                        aria-hidden="true"
                        onClick={togglePassword1}
                      />
                    </span>
                    {/* <p className="text-red-500 text-xs italic">
                      Please choose a password.
                    </p> */}
                  </div>

              <div className="loginn items-center mt-5">
              <h4 className="my-2 text-center text-sm">
                Don't have an Account?
                <Link className="text-blue-300 ml-2 hover:underline" to="/register">Sign up</Link>
              </h4>
              </div>

            {errMsg && <div className="err-msg">{errMsg}</div>}
      
                  <div className="btnl">
                  {redirect ? redirect :  <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 mt-5 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Log In</button> }
                  </div> 
                </form>
              </div>
            </div>
          </LogiSection>
        ); 
  }

  export default Login

const LogiSection = styled.section`
  .success-msg,
  .err-msg {
  color: #FFFCFC;
  border: 2px solid #dc3545;
  background-color: #ff3d77;
  padding: 10px;
  border-radius: 3px;
}
.success-msg {
  color: #ffffff;
  background-color: #20c997;
  border-color: rgba(0, 0, 0, 0.1);
}
  .rect {
    position: absolute;
    width: 521px;
    height: 640px;
    right: 50px;
    top: 40px;
    border-radius: 20px;
    z-index: 1;
    background-color: #FFFCFC;
  }
  .rect .imgp{
    width: 0;
    height: 0;
  }
  .rect .login {
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin-left: 10px;
    margin-top: 100px;
    
  }
  .rect .login form .logint {
    color: #032d23;
    font-family: "Product Sans";
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 20px;
  }
  .rect .login form .btnl button {
    background: #1d88d6;
    transition: 0.5s;
  }
  .rect .login form .ip input {
    border-color: #032d23;
  }
  .tt a {
    color: #63c5da;
    font-family: "Inter", sans-serif;
  }
  .alternative {
    font-family: "Inter", sans-serif;
  }
  .alternative a {
    color: #63c5da;
  }
  .alternative button .brt span {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 212% */
    letter-spacing: -0.33px;
    color: #032d23;
    opacity: 0.9;
  }
  .rect .login form .ip span .bth {
    color: #032d23;
  }
  @media(max-device-width: 500px) and (min-device-width: 320px)
  {
    .rect .imgp{
      position: absolute;
      width: 100px;
      height: 48px;
      left: 40vw;
      top: 7vh;
    }
    .rect {
    width: 100vw;
    height: 100vh;
    right: 0px;
    top: 0px;
    border-radius: 0px;
    z-index: 1;
    background-color: none;
    background-image: url("images/p-1.png")
  }
  .rect .login {
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    margin-left: 0px;
    margin-top: 20vh;
  }
  .btnl button {
    height: 6vh;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 34px;
  }
  .rect .login form .logint {
    color: #ECECEC;
  }
  .loginn label {
    color: #ECECEC;
  }
  .loginn h4 {
    color: #ffffff;
  }
  .loginn{
    margin-top: 25vh;
  }
  }
  @media(max-device-width: 1024px) and (min-device-width: 500px)
  {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: url("images/i-1.png");

    .rect .imgp{
      position: absolute;
      width: 150px;
      height: 72px;
      left: 30vw;
      top: -17vh;
    }
    .rect {
    position: absolute;
    width: 73vw;
    height: 63vh;
    right: 13.366vw;
    top: 24.878vh;
    border-radius: 20px;
    z-index: 1;
    background-color: #FFFCFC;
  }
  .rect .login {
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin-left: 20px;
    margin-top: 150px;
  }
  .alternative .ggl {
    height: 64px;
  }
  .alternative button .brt span {
     font-style: normal;
     font-weight: 600;
     font-size: 20px;
     line-height: 34px;
/* identical to box height, or 170% */
     letter-spacing: -0.33px;
     color: #111111;
  }
  }
`;