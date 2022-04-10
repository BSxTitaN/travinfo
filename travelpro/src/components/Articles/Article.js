import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import React from "react";
import { ChevronRight, ChevronLeft } from "react-feather";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Feilds: Cover Image, Title, Meta Desc, EditorName, Article Date, Desc, Image */


export default function Explore() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await axios.get('http://localhost:5000/');
      setPost(response.data);
      console.log(response.data);
    }
    getPost();
  }, []);

  if (!post) return "No post!"

  var settings = {
    centerMode: true,
    infinite: true,
    speed: 300,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  };

  return (
    <ExploreSection>
      <div className="cpt">
        <h2>The future of travel</h2>
        <p>The ways people travel, work and live are blurring. From product innovations, to the latest travel trends, discover how the future of travel is being shaped by Travinfo.</p>
      </div>
      <Slider className="slidy" {...settings}>
        {post.map((article) => (
          <div className="ctn flex">
            <Link to={`/article/${article.ar_no}`}>
              <img className="w-1/3" src={article.image} alt="none" />
              <h1>{article.ar_title}</h1>
              <p>{article.meta_desc}</p>
              <p>{new Date(article.date).toDateString()}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </ExploreSection>
  );
}

const ExploreSection = styled.div`
  background: #111111;
  width: 98.9vw;
  height: 130vh;
  color: var(--light);
  margin-top: 7vh;
  .cpt{
    background: #fafafc;
    color: #111111;
    padding: var(--sidePadding);
    padding-left: 10vw;
    padding-bottom: 30vh;
    h2 {
      font-family: "Product Sans";
      font-weight: bold;
      font-size: 50px;
    }
    p {
      font-family: "Product Sans";
      font-style: normal;
      font-size: 20px;
      line-height: 30px;
      width: 40vw;
    }
  }
  .slidy {
    position: relative;
    margin-top: -25vh;
  }
  .ctn {
    margin-left: -25vw;
    img {
      width: 45vw;
      height: 55vh;
      -o-object-fit: cover;
      object-fit: cover;
      border-radius: 12px;
      -webkit-filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
      filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
    }
    h1 {
      font-family: Product Sans;
      font-style: normal;
      font-size: 30px;
      width: 40vw;
      margin-top: 1rem;
      color: #111111;
    }
    p {
      margin-top: 0.5rem;
      color: #111111;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 40vw;
    }
  }
  .slick-prev{
    left: 62vw;
    top: 85vh;
    background: rgb(118, 118, 118);
    color: var(--light);
    border-radius: 100vw;
    height: 6vh;
    width: 3vw;
  }
  .slick-next
  {
    right: 28vw;
    top: 85vh;
    color: var(--light);
    background: rgb(118, 118, 118);
    border-radius: 100vw;
    height: 6vh;
    width: 3vw;
  }
  .slick-center .ctn{
    h1{color: #ffffff;}
    p{color: #ffffff;}
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
  width: 100vw;
  height: 90vh;
  .cpt{
    background: #111111;
    color: #ffffff;
    padding-bottom: 0vh;
    h2 {
    }
    p {
      font-size: 20px;
      word-spacing: 1vw;
      line-height: 30px;
      width: 60vw;
      margin-bottom: 10vh;
    }
  }
  .slidy {
    margin-top: 0vh;
  }
  .ctn {
    margin-left: -23vw;
    img {
      width: 40vw;
      height: 30vh;
    }
    h1 {
      font-size: 25px;
      width: 40vw;
    }
    p {
      margin-top: 0.5rem;
    }
  }
  }
  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    width: 100vw;
    height: 100vh;
  .cpt{
    background: #111111;
    color: #ffffff;
    padding-bottom: 0vh;
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 15px;
      word-spacing: 1vw;
      line-height: 30px;
      width: 85vw;
      margin-bottom: 10vh;
    }
  }
  .slidy {
    margin-top: 0vh;
  }
  .ctn {
    margin-left: 5vw;
    img {
      width: 70vw;
      height: 30vh;
    }
    h1 {
      font-size: 25px;
      width: 70vw;
    }
    p {
      margin-top: 0.5rem;
    }
  }
`;
