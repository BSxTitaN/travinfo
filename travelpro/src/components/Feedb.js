import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Feedb = () => {

  let navigate = useNavigate();

  const {user, feedbackUser, wait} = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
      email: user.email_id,
      user_name: user.user_name,
      u_fd: ''
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

      const data = await feedbackUser(formData);
      if(data.success){
          e.target.reset();
          setTimeout(()=> {
            navigate('/');
           }, 5000);
          setSuccessMsg('Your Feedback has been recieved!');
          setErrMsg(false);
      }
      else if(!data.success && data.message){
          setSuccessMsg(false);
          setErrMsg(data.message);
      }
      
  }

  return (
    <Feedback>
      <div className="background">
        <div className="text">
          <h2>DISCOVER</h2>
          <h3>The Alps</h3>
        </div>
        <div className="info">
          <h3>According to WWF, the Alps are one of the regions with the richest flora and fauna in Europe, second only to the Mediterranean. There are about 4,500 species of vascular plants, 800 species of mosses, 300 liverworts, 2500 lichens and more than 5000 fungi found in the Alps.</h3>
        </div>
        <video className='videoTag' autoPlay loop muted>
          <source src="images/alps1.mp4" type='video/mp4' />
        </video>
        {/* <img src="images/MIT.gif" alt="" /> */}
      </div>
      <div className="formy">
        <div className="img">
          <img src="images/conta.png" alt="" />
        </div>
        <div className="formyin">

          <Link to="/">
            <ChevronLeft className='goback' />
          </Link>

          <div className="head">
            <h1>DON'T BE SHY, SAY HI!</h1>
            <p>Do you have any questions, suggestions or feedback? We'd love to hear from you!</p>
          </div>

          <div className="main">
            <form className='forming' onSubmit={submitForm}>
            <TextField
                      onChange={onChangeInput}
                      value={formData.user_name}
                      disabled
                      className="name"
                      label="Username"
                      size="small" 
                      name= "user_name"
             />
            <TextField
                      className="email" 
                      onChange= {onChangeInput}
                      value= {formData.email}
                      name = "email"
                      label= "Email"
                      size= "small" 
             />
             <TextField
                      className="mess"
                      multiline
                      rows={4}
                      onChange={onChangeInput}
                      value={formData.u_fd}
                      name = "u_fd"
                      label="Message"
            />
            <button disabled={wait} className="button flex mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-3xl focus:outline-none focus:shadow-outline" type="submit">Send</button>

            {errMsg && <div className="err-msg">{errMsg}</div>}
            {successMsg && <div className="success-msg">{successMsg}</div>}

            </form>
          </div>
        </div>
      </div>
    </Feedback>
  );
}

export default Feedb;


const Feedback = styled.footer`
.success-msg,
  .err-msg {
  color: #dc3545;
  font-family: Nunito Sans;
  margin-top: 2vh;
}
.success-msg {
  color: #20c997;
}

.text {
  font-family: "Product Sans";
  font-weight: bold;
}
.text h2 {
  font-size: 80px;
  line-height: 70px;
  line-height: 1.1;
  position: absolute;
  right: 2vh;
  color: #ffffff;
}
.text h3 {
  font-size: 120px;
  line-height: 70px;
  line-height: 1.1;
  position: absolute;
  right: 7vh;
  top: 8vh;
}
.img {
  display: none;
}
.background{
  position: absolute;
  right: 0vw;
}
.background .videoTag{
  width: 70vw;
  height: 100vh;
  overflow: none;
  object-fit: cover;
}
.info {
  position: absolute;
  background: #191919;
  color: #ffffff;
  width: 30vw;
  right: 0;
  bottom: 0;
  padding: 1.3rem;
}
.info h3 {
  font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
}
.formy {
  z-index: 1;
  background-color: #FFFCFC;
  position: absolute;
  width: 30vw;
  height: 100vh;
}
.formyin {
  position: absolute;
  top: 7vh;
  left: 2vw; 
}
.head {
  margin-top: 10vh;
}
.head h1 {
  font-family: "Product Sans";
  font-weight: bold;
  font-size: 30px;
  line-height: 70px;
  line-height: 1.1;
}
.head p {
  font-family: "Product Sans";
    font-style: normal;
    font-size: 15px;
    line-height: 30px;
    width: 23vw;
    margin-top: 1vh;
}
.name {
  width: 22vw;
  margin-top: 2vh;
}
.email {
  width: 22vw;
  margin-top: 2vh;
}
.mess {
  width: 22vw;
  margin-top: 2vh;
}
.forming {
  font-family: "Product Sans";
  font-weight: normal;
}
@media (max-width: 36rem) {
  .background{
    display: none;
  }
  .img {
    display: initial;
  }
  .formy {
  width: 100vw;
  height: 100vh;
  bottom: 0; 
}
.formyin {
  position: relative;
  border-radius: 10px 10px 0 0;
  background: #ffffff;
  left: 0;
  top: -1vh;
  padding: 1rem;
}
.head {
  margin-top: 5vh;
}
.head h1 {
  font-size: 30px;
}
.head p {
    font-size: 15px;
    line-height: 30px;
    width: 70vw;
}
.name {
  margin-top: 2vh;
  width: 82vw;
}
.email {
  margin-top: 2vh;
  width: 82vw;
}
.mess {
  margin-top: 2vh;
  width: 82vw;
}
}
@media (min-width: 36rem) and (max-width: 62.5rem) {
  .background .videoTag{
  width: 100vw;
  height: 50vh;
}
.formy {
  width: 100vw;
  height: 51.6vh;
  bottom: 0;
}
.text h2 {
  font-size: 40px;
  right: 2vh;
  top: 1vh;
}
.text h3 {
  font-size: 70px;
  right: 3vh;
  top: 4vh;
}
.info h3 {
    font-size: 12px;
    line-height: 25px;
}
.info {
  width: 50vw;
  padding: 1rem;
}
.formyin {
  top: 2vh;
  left: 5vw; 
}
.head {
  margin-top: 3vh;
}
.head h1 {
  font-size: 40px;
}
.head p {
    font-size: 15px;
    line-height: 30px;
    width: 49vw;
    margin-top: 1vh;
}
.name {
  margin-top: 1vh;
  width: 82vw;
}
.email {
  margin-top: 2vh;
  width: 82vw;
}
.mess {
  margin-top: 2vh;
  width: 82vw;
}
}
`