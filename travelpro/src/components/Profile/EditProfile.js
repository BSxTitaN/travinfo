import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { ChevronLeft } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function EditProfile() {

    const {updateUser, user, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
      email_id: user.email_id,
        user_name: user.user_name,
        desc: user.desc,
        address: '',
        state: '',
        pincode: '',
        profile: user.profile
    });
  
    const onChangeInput = (e) => {
      setFormData({
          ...formData,
          [e.target.name]:e.target.value
      })
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    }
  

    const submitForm = async (e) => {
      e.preventDefault();


      const data = await updateUser(formData);
      if(data.success){
          e.target.reset();
          setSuccessMsg('Your Profile has been updated');
          setErrMsg(false);
      }
      else if(!data.success && data.message){
          setSuccessMsg(false);
          setErrMsg(data.message);
      }
      
  }

    const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
      <EditProfy>
      <div className="background">
        <div className="text">
          <h2>DISCOVER</h2>
        </div>
        <img className='peace' src="images/MIT.gif" alt="" />
      </div>
      <div className="formy">
        <div className="img">
          <img src="images/conta.png" alt="" />
        </div>
        <div className="formyin">
          <Link to="/profile">
            <ChevronLeft className='goback' />
          </Link>

          <div className="head">
            <h1>UPDATE YOUR PROFILE</h1>
          </div>

          <div className="main">
            <form className='forming' onSubmit={submitForm}>
              <div className="flex">
              <TextField
                      className="name"
                      onChange={onChangeInput}
                      value={formData.profile}
                      type="url"
                      label="Profile Pic URL"
                      size="small" 
                      name= "profile"
             />
              </div>
              <input
                    type="email"
                    hidden
                    onChange={onChangeInput}
                    value={formData.email_id}
                    name='email_id'
                />
            <TextField
                      className="name"
                      onChange={onChangeInput}
                      value={formData.user_name}
                      label="Username"
                      size="small" 
                      name= "user_name"
             />
            <TextField
                      className="about"
                      onChange={onChangeInput}
                      value={formData.desc}
                      multiline
                      rows={2}
                      name = "desc"
                      label="About Me"
            />
            <TextField
                      className="address" 
                      name = "address"
                      onChange={onChangeInput}
                      value={formData.address}
                      label= "Address"
                      size= "small" 
             />
            <TextField
                      className="pincode" 
                      onChange={onChangeInput}
                      value={formData.pincode}
                      name = "pincode"
                      label= "Pincode"
                      size= "small" 
             />
            <TextField
                      className="state" 
                      onChange={onChangeInput}
                      value={formData.state}
                      name = "state"
                      label= "State"
                      size= "small" 
             />
            <button disabled={wait} className="button flex mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-3xl focus:outline-none focus:shadow-outline" type="submit">Send</button>

            {errMsg && <div className="err-msg">{errMsg}</div>}
            {successMsg && <div className="success-msg">{successMsg}</div>}

            </form>
          </div>
        </div>
        </div> 
      </EditProfy>
  );
}

export default EditProfile;

const EditProfy = styled.footer`
.success-msg,
  .err-msg {
  color: #dc3545;
  font-family: Nunito Sans;
  margin-top: 2vh;
}
.success-msg {
  color: #20c997;
}
.preview {
    margin-top: 50;
    display: "flex";
    flex-direction: "column";
}
.dlt {
    cursor: "pointer";
    background: #e3242b;
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Product Sans";
    font-weight: bold;
    border-radius: 5vh;
}
.dlt:hover {
   background-color: #ff333a;
}
.btn-i {
   background-color: #20c997;
   color: #ffffff;
   font-family: "Product Sans";
   font-weight: bold;
   border-radius: 5vh;
   margin-top: 4vh;
   margin-right: 2vw;
   height: 6vh;
}
.btn-i:hover {
   background-color: #2ef2b7;
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
.img {
  display: none;
}
.gob{
    width: 3vw;
}
.background{
  position: absolute;
  right: 0vw;
}
.background .peace{
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
  margin-bottom: 2vh;
}
.name {
  width: 26vw;
  margin-top: 2vh;
}
.address {
  width: 26vw;
  margin-top: 2vh;
}
.about {
  width: 26vw;
  margin-top: 2vh;
}
.pincode {
  width: 12vw;
  margin-top: 2vh;
  margin-right: 2vw;
}
.state {
  width: 12vw;
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
.name {
  margin-top: 2vh;
  width: 82vw;
}
.address {
  margin-top: 2vh;
  width: 82vw;
}
.about {
  margin-top: 2vh;
  width: 82vw;
}
}
@media (min-width: 36rem) and (max-width: 62.5rem) {
  .background .peace{
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
.name {
  margin-top: 1vh;
  width: 82vw;
}
.address {
  margin-top: 2vh;
  width: 82vw;
}
.about {
  margin-top: 2vh;
  width: 82vw;
}
}
`