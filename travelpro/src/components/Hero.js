import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <HeroSection className="light hero">
      <div className="heroInner">
        <span>
          <h1>Life is short and world is wide</h1>
          <p>So what are you waiting for? Research your Dream place by clicking on Button below or Explore More</p>
          <Link to="/search" className="btn btn-light">
            Search
          </Link>
        </span>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(/images/simple.png);
  background-position: center, bottom left;
  background-size: cover;
  height: 110vh;
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
    font-weight: bold;
    font-size: 80px;
    width: 50vw;
    line-height: 70px;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
  span p {
    width: 30vw;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 36rem) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(images/simple.png);
    background-position: bottom;
    background-size: cover;
    align-items: flex-start;
    padding-top: 8.5rem;
    height: 80vh;
    max-height: 720px;
    h1 {
    font-size: 60px;
    width: 90vw;
  }
  span p {
    width: 82vw;
  }
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
    height: 100vh;
    max-height: 920px;
    span {
    max-width: 30vh;
  }
  h1 {
    font-size: 80px;
    width: 80vw;
  }
  span p {
    width: 62vw;
  }
  }
`;