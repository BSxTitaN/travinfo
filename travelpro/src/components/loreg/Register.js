import styled from "styled-components";
import {  useState, useContext } from "react";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
// data() {
//   return {
//     email: "",
//     password: "",
//     username: "",
//     gender: ""
//   }
// },
// methods: {
//   submitForm() {
//     this.$axios
//     .post('http://localhost:4001/register',{
//       email: this.email,
//       password: this.password,
//       username: this.username,
//       gender: this.gender
//     })
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }
// }

const Register = () => {
  // Initialize a boolean state
  const [passwordShown1, setPasswordShown1] = useState(false);

  // Password toggle handler
  const togglePassword1 = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown1(!passwordShown1);
  };
  const {registerUser, wait} = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
      email_id:'',
      user_name: '',
      password:'',
      dob: '',
      gender: '',
      address: ''
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
          setSuccessMsg(false);
          setErrMsg('Please Fill in all Required Fields!');
          return;
      }

      const data = await registerUser(formData);
      if(data.success){
          e.target.reset();
          setSuccessMsg('You have successfully registered.');
          setErrMsg(false);
      }
      else if(!data.success && data.message){
          setSuccessMsg(false);
          setErrMsg(data.message);
      }
      
  }


    return (
      <LogiSection className="rectsec">
      <div className="rect">
      <img src="images/Travinfo1.png" alt="" className="imgp" />
        <div className="login">
          <form onSubmit={submitForm} className="rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="logint">Signup</h1>
            <div className="ip mb-4">
              {/* <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              ></label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email_id"
                type="email"
                placeholder="Email"
                name="email_id"
                onChange={onChangeInput}
                value={formData.email_id}
                required
              />
            </div>
            <div className="ip mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Username"
                  onChange={onChangeInput}
                  value={formData.user_name}
                  required
                />
              </div>
            <div className="ip relative mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={passwordShown1 ? "text" : "password"}
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
  
            <div className="ip flex mb-4 items-center justify-between">
                <input
                  type="date"
                  id="birthday"
                  name="dob"
                  onChange={onChangeInput}
                  value={formData.dob}
                  className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              <select
                onChange={onChangeInput}
                value={formData.gender}
                name="gender"
               className="dpd select select-bordered border rounded py-2 px-3">
                      <option disabled="">Gender</option> 
                      <option>Male</option> 
                      <option>Female</option> 
                      <option>Other</option>
              </select>
          </div>

          <div className="ip flex mb-4 items-center justify-between">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  onChange={onChangeInput}
                  value={formData.address}
                  className="address shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
          </div>

          <div className="ip flex mb-4 items-center justify-between">
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  onChange={onChangeInput}
                  value={formData.state}
                  className="city shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  placeholder="Pincode"
                  onChange={onChangeInput}
                  value={formData.pincode}
                  className="pc shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
          </div>
  
            <div className="loginn flex items-center justify-between">
              <h4 className="my-2 text-center text-sm">
                Do have an Account?
                <Link className="text-indigo-400 ml-2 hover:underline" to="/login">Sign in</Link>
              </h4>
  
            </div>

            {errMsg && <div className="err-msg">{errMsg}</div>}
            {successMsg && <div className="success-msg">{successMsg}</div>}
            
            <div className="btnl">
            <button
                type="submit"
                disabled={wait}
                className="group relative w-full flex justify-center py-2 px-4 mt-5 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  /> */}
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </LogiSection>
    )
}

export default Register

const LogiSection = styled.section`

  .success-msg,
  .err-msg {
  color: #dc3545;
  border: 1px solid #dc3545;
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
    background: #FFFCFC;
    border-radius: 20px;
    z-index: 1;
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
    margin-top: 10px;
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
  .rect .login form .loginn .tt a {
    color: #63c5da;
    font-family: "Inter", sans-serif;
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
  .ip .city {
    width: 10vw;
  }
  .ip .dpd {
      width:120px;
      border: solid 1px #111111;
      color: #000000;
  }
  @media(max-device-width: 500px) and (min-device-width: 290px)
  {
    .rect .imgp{
      position: absolute;
      width: 90px;
      height: 48px;
      left: 40vw;
      top: 7vh;
    }
    .ip .city {
    width: 35vw;
  }
    .ip .address {
      width: 45vw;
    }
    .ip .pc {
      width: 45vw;
    }
    .loginn h4 {
      color: #FFFCFC;
    }
    .ip .dpd {
      width:120px;
      margin-left: 10px;
      border: solid 1px #111111;
  }
    .rect {
    width: 100vw;
    height: 100vh;
    right: 0px;
    top: 0px;
    border-radius: 0px;
    z-index: 1;
    background-color: none;
    background-image: url("images/p-2.png")
  }
  .rect .login {
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    margin-left: 0px;
    margin-top: 20vh;
  }
  .btnl {
    margin-top: 5vh;
  }
  .btnl button {
    height: 6vh;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 34px;
  }
  .alternative .ory {
    display: none;
  }
  .alternative .ggl {
    position:absolute;
    width: 83vw;
    top: 90vh;
  }
  .alternative h3 {
    position: absolute;
    top: 77vh;
    left: 20vw;
    color: #FFFFFF;
  }
  .alternative h3 a {
  }
  .rect .login form .logint {
    color: #FFFFFF;
  }
  .loginn label {
    color: #ECECEC;
  }
  }
  @media(max-device-width: 1024px) and (min-device-width: 500px)
  {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: url("images/i-2.png");

    .ip .city {
    width: 20vw;
  }
    .ip .address {
      width: 35vw;
    }
    .ip .pc {
      width: 35vw;
    }
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
    margin-top: 40px;
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