import styled from "styled-components";
import { Home, LogOut, User, Book } from "react-feather";
import { useState, useContext } from "react";
import {UserContext} from '../context/UserContext'
import React from 'react';
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { logout } = useContext(UserContext);

  return (
    <MobileNavDiv className={isOpen ? "open" : null}>
      <div
        className="toggle"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
      </div>
      <div className="items">
        <div
          className="item"
        >
          <Home /> <Link to="/">Home</Link>
        </div>
        <div
          className="item">
          <User /> <Link to="/profile">Profile</Link>
        </div>
        <div
          className="item"
        >
          <Book /> <Link to="/feedback">Feedback</Link>
        </div>
        <div 
          className="item">
          <LogOut /> <button type="submit" onClick={logout}>Logout</button>
        </div>
      </div>
    </MobileNavDiv>
  );
}

export default MobileNav

const MobileNavDiv = styled.div`
  display: none;

  @media (max-width: 64rem) {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    color: var(--dark);
    z-index: 99;

    .items {
      display: flex;
      pointer-events: none;
      opacity: 0;
      transform: translateX(3rem);
      flex-direction: column;
      gap: 0.5rem;
      background: var(--dark);
      color: var(--light);
      padding: 1rem 1.5rem 1rem 0.75rem;
      border-radius: 1rem 0 0 1rem;
      box-shadow: 0.5rem 0.5rem 1rem #0005;
      position: fixed;
      right: 0;
      bottom: 5.5rem;
      transition: all 0.2s;

      .item {
        display: flex;
        align-items: center;
        padding: 0.25rem 3rem 0.25rem 0.5rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: #88a2;
        }
        &.active {
          color: var(--red);
        }
        svg {
          margin-right: 1rem;
          width: 1.25rem;
        }
      }
    }

    .toggle {
      width: 3rem;
      height: 3rem;
      border-radius: 99px;
      background: var(--dark);
      box-shadow: 0 0.5rem 1rem #0002;
      position: fixed;
      right: 1.5rem;
      bottom: 1.5rem;
      display: grid;
      place-items: center;
      transition: all 0.2s;
      cursor: pointer;
      z-index: 99;

      span {
        display: block;
        position: relative;
        height: 2px;
        width: 1.5rem;
        background: var(--light);
        border-radius: 3px;
        transition: all 0.2s;

        &::before,
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 1.5rem;
          background: var(--light);
          border-radius: 3px;
          transition: all 0.2s;
        }
        &::before {
          transform: translateY(-6px);
        }
        &::after {
          transform: translateY(6px);
        }
      }
    }

    &.open {
      .items {
        pointer-events: auto;
        opacity: 1;
        transform: translateX(0);
      }
      .toggle {
        background: var(--red);

        span {
          background: var(--red);
          &::before {
            background: #fff;
            transform: translate(0) rotate(45deg);
          }
          &::after {
            background: #fff;
            transform: translate(0) rotate(-45deg);
          }
        }
      }
    }
  }
`;
