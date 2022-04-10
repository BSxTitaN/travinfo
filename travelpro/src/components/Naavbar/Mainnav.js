import styled from "styled-components";
import { Globe } from "react-feather";
import DropD from "../DropD";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import MobileNav from "../MobileNav";
import React from 'react';
import { useRouter } from "../../router";

export default function Mainnav({ onPlaceChanged, onLoad }) {

  const router = useRouter();
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <HeaderSection
      ref={headerRef}
      className={[scrolled || router.pathname !== "/" ? "scrolled" : null
      ]}
    >
      <div className="headerInner">
        <div className="logo" >
          <Link to="/" >
            <img src="/images/Travinfo.png" alt="" />
          </Link>
        </div>
        <div className="nav">
            <Link to="/" className="a2 active">
                    Places to stay
            </Link>  
            <Link to="/search" className="a1">
                Explore More
            </Link>  
            <Link to="/article" className="a3">
                Article
            </Link>  
        </div>
        <MobileNav/>


        
        <div className="profile">
          <Link to="/feedback" className="globe">
            <Globe />
          </Link>
            <DropD />
        </div>
      </div>
    </HeaderSection>
  );
}



const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  color: #fafafc;
  padding: 1.5rem var(--sidePadding);
  width: 100%;
  z-index: 10;
  transition: background 0.2s, border-bottom 0.2s;



  .headerInner .moba {
    display: none;
  }
  .logo img{
    width: 7vw;
    height: 5vh;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--light);
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;

    label,
    input,
    .guestNumber {
      background: none;
      font-size: 14px;
      border: none;
      line-height: 1.5;
      display: block;
      color: var(--dark);
      outline: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    input {
      width: 100%;
      font-weight: 700;

      &::placeholder {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .guestNumber {
      font-weight: 700;
      .empty {
        color: var(--dark);
        font-weight: 400;
        opacity: 0.5;
      }
    }
    .field {
      width: 100%;
      padding: 0.5rem 1.5rem;
      border-radius: 99px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background 0.2s;
      position: relative;

      & + .field::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 2rem;
        background: var(--gray);
        border-radius: 2px;
        left: 0;
        transition: transform 0.2s;
      }
      &:hover,
      &:focus-within {
        background: var(--gray);
      }

      &:last-of-type {
        padding-right: 10rem;
      }
    }
  }
  .overlay:hover .field::before,
  .overlay:focus-within .field::before {
    transform: scale(0);
  }

  .profile,
  .logo,
  .globe,
  .nav {
    display: flex;
    align-items: center;
  }

  .headerInner {
    max-width: var(--containerWidth);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }

  & > div {
    flex: 0 0 20%;
  }
  .nav {
    justify-content: center;
    transition: all 0.2s;
    font-family: "Product Sans";
    font-weight: normal;
    .a1 {
      margin-left: 1.5rem;
    }
    .a3 {
      margin-left: 1.5rem;
    }
    a {
      position: relative;
    }
    .a2::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: var(--light);
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    .a1::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: var(--light);
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    .a3::before {
      position: absolute;
      content: "";
      width: 1.5rem;
      height: 2px;
      border-radius: 2px;
      background: var(--light);
      bottom: -0.5rem;
      left: calc(50% - 0.75rem);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s;
    }
    a:hover::before,
    a.active::before {
      transform: scaleX(1);
    }
  }
  .logo {
    cursor: pointer;
    img {

      color: #1111;
      transition: color 0.2s;
    }
    span {
      font-weight: 600;
      font-size: 1.15rem;
      margin-left: 0.5rem;
    }
  }
  .profile {
    position: absolute;
    right: 10vw;
    justify-content: flex-end;
    white-space: nowrap;
    svg {
      height: 1.15rem;
    }
    a {
      margin-right: 1.5rem;
    }
    .menu {
      color: #2e2e48;
      margin-right: 0.5rem;
    }
  }

  .search {
    & .form {
      position: absolute;
      transform: translate(-50%, 150%);
      left: 50%;
      top: -1rem;
      background: var(--light);
      padding: 1rem;
      border-radius: 99px;
      max-width: 720px;
      margin: 1.5rem 0;
      width: 60vw;
      box-shadow: 0 1rem 3rem -1rem #1e1e38;
      display: flex;
      align-items: center;
      transition: all 0.2s;
      transform-origin: center;
    }

    & * {
      transition: all 0.2s;
    }
    & > .form .input {
      background: none;
      border: none;
      font-size: 1.15rem;
      flex: 1;
      padding: 0 1.5rem;
      color: var(--dark);
      outline: none;
      
      &::placeholder {
        color: var(--dark);
        opacity: 0.6;
      }
    }

  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 36rem) {
    .profile,
    .logo,
    nav,
    .form > button span {
      display: none;
    }
    .overlay {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr;
    }
    .search .form {
      position: relative;
      transform: none !important;
      width: 100% !important;
      left: unset;
      top: 0;
      margin: 0;
      & > .input {
        padding: 0.2rem;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 36rem) and (max-width: 62.5rem) {
    .profile {
      display: none;
    }
    .headerInner {
      grid-template-columns: 1fr 1fr;
    }
    .logo img{
    width: 15vw;
    height: 4vh;
  }
  }

  &.scrolled:not(.inputFocus) {
    background: var(--light);
    color: var(--dark);
    border-bottom: 2px solid var(--gray);

    .overlay {
      opacity: 0;
      pointer-events: none;
    }

    nav {
      opacity: 0;
      pointer-events: none;
    }
    .user {
      box-shadow: 0 0 0 2px var(--gray);
    }
    .form {
      box-shadow: 0 0 0 2px var(--gray);
      transform: translate(-50%, 0.125rem) scale(0.83);
      width: 480px;
    }
    @media (max-width: 36rem) {
      padding-top: 1rem;
      padding-bottom: 1rem;

      .form {
        padding: 0;
        box-shadow: none;
        background: var(--gray);
      }
    }

    @media (min-width: 36rem) and (max-width: 62.5rem) {
      .profile {
        opacity: 0;
        pointer-events: none;
      }
      .form {
        left: auto;
        right: 0;
        transform: translate(0, 0.125rem) scale(0.83);
        width: 50%;
      }
    }
  }

  &.inputFocus {
    color: var(--dark);

    .logo svg {
      color: var(--red);
    }

    .form {
      background: var(--light);
      width: 100%;
      box-shadow: 0 1rem 1.5rem -0.5rem #0001;
    }
  }
`;