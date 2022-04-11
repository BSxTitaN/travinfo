import styled from "styled-components";
import { Globe, Instagram } from "react-feather";
import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterSection>
      <div className="footerInner">
        <span>
          <h2>About</h2>
          <ul>
            <Link to="/how-it-work"><li>How TravInfo works</li></Link>
            <Link to="/article"><li>Articleroom</li></Link>
            <Link to="/"><li>TravInfo 2022</li></Link>
          </ul>
        </span>
        <span>
          <h2>Community</h2>
          <ul>
          <Link to="/"><li>Travinfo.com</li></Link>
          </ul>
        </span>
        <span>
          <h2>Explore</h2>
          <ul>
            <Link to="/feedback"><li>Write a Review</li></Link>
            <Link to="https://www.tripadvisor.in/TravelersChoice"><li>Travellers Choice</li></Link>
            <Link to="/editarticle"><li>Travel Article</li></Link>
          </ul>
        </span>
        <span>
          <h2>Support</h2>
          <ul>
          <Link to="/feedback"><li>Help Centre</li></Link>
          </ul>
        </span>
        <span className="footer-bottom">
          <p>
            <span>
              <Globe className="globe" />
              English
            </span>
            <span>
              INR
            </span>
            <span>
              <a href="https://www.instagram.com/devlomers/?hl=en" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </span>
          </p>
          <p>
            &copy; 2022{" "}
            <a href="https://github.com/BSxTitaN" target="_blank" rel="noreferrer">
              TravInfo
            </a>
          </p>
        </span>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  padding: 3rem var(--sidePadding);
  background: var(--gray);
  border-top: 1px solid #0002;

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
  .footerInner {
    & > span {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 0;
    }
    & > span + span {
      border-top: 1px solid #0002;
    }
    & > span:first-of-type {
      padding-top: 0;
    }
    & > span:last-of-type {
      padding-bottom: 0;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      li {
        padding: 0.25rem 0;
        font-size: 0.85rem;
        cursor: pointer;
        opacity: 0.8;
        transition: all 0.2s;
        width: fit-content;

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }
    }

    .footer-bottom {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: space-between;
      a {
        margin-left: 0.5rem;
      }
      a:hover {
        text-decoration: underline;
        color: var(--red);
      }
      svg {
        height: 1rem;
      }
      svg.globe {
        margin-right: 0.1rem;
      }
      svg.dollar {
        margin-right: -0.1rem;
      }
      span + span {
        margin-left: 1rem;
      }
      p,
      span {
        display: flex;
        align-items: center;
      }
    }
  }

  @media (max-width: 36rem) {
    .footerInner .footer-bottom {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media (min-width: 81rem) {
    .footerInner {
      display: flex;
      flex-flow: row wrap;
      max-width: 1200px;
      margin: 0 auto;
      justify-content: space-between;

      .footer-bottom {
        flex: 0 0 100%;
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }
      .lg-hidden {
        display: none;
      }
      & > span:not(.footer-bottom) {
        padding: 0;
        border-top: none !important;
      }
    }
  }
`;
