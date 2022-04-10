import styled from "styled-components";

export default function ArtBanner() {
    return (
      <BannerSection>
          <div className="">
            <span>
                <h2>This is where stories are told!</h2>
            </span>
          </div>
      </BannerSection>
    );
  }
  
  const BannerSection = styled.section`
  div {
    padding: 6.5rem var(--sidePadding);
    background: url(/images/valley1.png);
    background-size: cover;
    border-radius: 1rem;
    color: var(--white);
    margin-top: 20vh;
  }
    span {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    h2 {
      font-family: "Product Sans";
      font-style: normal;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      font-weight: 900;
    }
  
    @media (max-width: 36rem) {
      background: url(images/valley-sm1.png);
      background-size: cover;
      background-position: center;
      div {
        margin-top: 13vh;
      }
      
      span {
        align-items: center;
        text-align: center;
      }
    }
`;