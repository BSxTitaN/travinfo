import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <HeroSection className="light hero">
      <div className="heroInner">
        <span>
          <h1>How-it's-Made</h1>
          <p>Find out how Travinfo works</p>
        </span>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(/images/t2.png);
  background-position: center, bottom left;
  background-size: cover;
  height: 100vh;
  color: var(--light);
  padding: 15rem var(--sidePadding) 6rem;

  .heroInner {
    display: flex;
    max-width: var(--containerWidth);
    margin: 0 auto;
  }

  span {
    max-width: var(--maxWidth);
  }

  h1 {
    font-family: "Product Sans";
    margin-left: 13vw;
    font-weight: bold;
    font-size: 120px;
    width: 60vw;
    line-height: 70px;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  span p {
    width: 50vw;
    margin-left: 25vw;
    font-size: 30px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 36rem) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(images/t2.png);
    background-position: bottom;
    background-size: cover;
    align-items: flex-start;
    padding-top: 8.5rem;
    height: 50vh;
    max-height: 720px;
    h1 {
    font-size: 50px;
    width: 90vw;
    margin-left: 1vw;
  }
  span p {
    width: 70vw;
    margin-left: 7vw;
    font-size: 20px;
  }
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
    height: 50vh;
    max-height: 920px;
    span {
    max-width: 30vh;
  }
  h1 {
    font-size: 80px;
    width: 80vw;
    margin-left: 5vw;
  }
  span p {
    width: 62vw;
    margin-left: 15vw;
  }
  }
`;