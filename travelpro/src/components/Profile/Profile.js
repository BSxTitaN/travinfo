import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import styled from "styled-components";
import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <ProfileShow className='grid'>
            <div className="upper flex">
                <div className='titlep'>
                <h2>Hi, I'm {user.user_name}</h2>
                <p>Gender: {user.gender}</p>
                <p>Joined in 2022</p>
                <Link to="/editprofile" className=''>
                    <input className='btn-l' type="button" value="Edit" />
                </Link>
                </div>
                <div className="photo">
                    <img className="inline object-cover w-24 h-24 rounded-full" src={user.profile} alt="" />
                </div>
            </div>
            <div className="info flex">
                <div className='infoep'>
                <h2>About Me</h2>
                <div className="infod">
                    <p>{user.desc}</p>
                </div>
                </div>
            </div>
            <div className="info flex">
                <div className='infoep'>
                <h2>Info:</h2>
                <div className='flex'>
                <MailIcon className='mr-2 h-5' />
                <p>Email: {user.email_id}</p>
                <PhoneIcon className='ml-10 mr-2 h-5' />
                <p>Address: {user.address}</p>
                </div>
                </div>
            </div>
        </ProfileShow>
    )
}

export default Profile

const ProfileShow = styled.section`
.btn-l {
    width: 5vw;
    height: 5vh;
    background-color:#0516FA;
    color: #ffffff;
    font-family: "Product Sans";
    font-style: normal;
    margin-top: 2vh;
    border-radius: 1vh;
    cursor: pointer;
}
.upper {
    margin-top: 10vh;
    justify-content: space-between;
}
.photo {
    
}
.titlep p{
    margin-top: 1vh;
    font-family: "Product Sans";
    font-style: normal;
}
.info {
    margin-top: 5vh;
    padding-top: 5vh;
    border-top: 2px solid #bbb;
}
.infoep h2{
    margin-bottom:2vh;
}
.infoep p{
    margin-bottom: 1vh;
    font-family: "Product Sans";
    font-style: normal;
}
@media (min-width: 36rem) and (max-width: 62.5rem) {
    .btn-l {
    width: 10vw;
    height: 4vh;
    margin-top: 1vh;
    border-radius: 0.5vh;
    font-size: 20px;
}
}
@media (max-width: 36rem) {
    .upper {
    margin-top: 6vh;
}
.btn-l {
    width: 15vw;
    height: 4vh;
    margin-top: 1vh;
    border-radius: 0.5vh;
    font-size: 15px;
}
}
`