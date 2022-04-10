import styled from "styled-components";
import "../styles/a.css"
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <BannerSection>
      <span>
        <h2>Wanna Explore place around yourself?</h2>
        <Link to='/search'>
        <a className="btn btn-dark">
          {"I'm flexible"}
        </a>
        </Link>
      </span>
    </BannerSection>
  );
}

const BannerSection = styled.section`
  padding: 6.5rem var(--sidePadding);
  background: url(/images/valley.png);
  background-size: cover;
  border-radius: 1rem;
  color: var(--light);
  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: var(--maxWidth);
  }
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 900;
  }
  .btn.btn-dark {
    --bgcolor: var(--dark);
    --color: var(--yellow);
  }

  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url(images/valley-sm.jpg);
    background-size: cover;
    background-position: center;

    span {
      align-items: center;
      text-align: center;
    }
  }
`;
