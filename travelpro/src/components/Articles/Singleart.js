import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

function Singleart() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await axios.get('http://localhost:5000/' + path);
      setPost(response.data);
    }
    getPost();
  }, [path]);

  if (!post) return "No post!"


    return (
      <>
      {post.map((article) => (
        <Artdiv key={article.ar_no}>
          <div className="outer">
            <img src={article.image} alt="Cover" />
          </div>
          <div className="inner">
            <div className="innerin">
                <div className="header">
                  <div className="flex">
                    <div className="cate">
                      {article.category}
                    </div>
                    <div className="loc">
                      {article.location}
                    </div>
                  </div>
                    <h2>{article.ar_title}</h2>
                    <div className="flex">
                      <h4>By {article.user_name}</h4>
                      <p>•</p>
                      <p>{new Date(article.date).toDateString()}</p>
                    </div>
                </div>
                <div className="desc">
                    <div className='detail' dangerouslySetInnerHTML={{ __html: article.description }} />
                </div>
              </div>
            </div> 
        </Artdiv>
      ))}
      </>
    )
}


export default Singleart

const Artdiv = styled.div`
.outer{
  width: 100%;
  height: 100vh;
  z-index: 1;
  margin-bottom: -35vh;
  background: var(--gray);
  position: relative;

  img{ 
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, var(--light) 30%, transparent);
    z-index: 3;
    height: 20vh;
    pointer-events: none;
  }
}
.inner{
  height: fit-content;
  padding: 3rem var(--sidePadding);
  z-index: 1;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -1rem 2rem -1rem #0003;
  background: #ffffff;
  max-width: calc(var(--containerWidth) + 2 * var(--sidePadding));
  margin: 0 auto;
}
.cate {
  font-family: Product Sans;
  font-style: normal;
  background: #65F4CD;
  width: fit-content;
  text-align: center;
  padding: 1vh;
  border-radius: 0.5rem;
  color: #ffffff;
  margin-bottom: 1vh;
}
.loc {
  margin-left: 1rem;
  font-family: Product Sans;
  font-style: normal;
  background: #4799E9;
  width: fit-content;
  text-align: center;
  padding: 1vh;
  border-radius: 0.5rem;
  color: #ffffff;
  margin-bottom: 1vh;
}
  .innerin {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 10px;
    letter-spacing: -1.34px;
  }
  h4{
    font-family: Product Sans;
    font-style: normal;
    font-size: 25px;
    line-height: 50px;
    margin-bottom: 5px;
    letter-spacing: -1px;
  }
  p{
    font-family: Product Sans;
    font-style: normal;
    font-size: 25px;
    line-height: 50px;
    margin-bottom: 5px;
    letter-spacing: -1px;
    margin-left: 10px;
  }
  .desc{
    margin-top: 5vh;
    display: block;
  }
  @media (max-width: 58rem) {
    .outer{
      margin-bottom: -50vh;
      height: calc(100vh + 10rem);
    }
    .inner {
      &::before {
      position: absolute;
      content: "";
      background: var(--dark);
      width: 3rem;
      height: 3px;
      border-radius: 3px;
      opacity: 0.25;
      top: 0.75rem;
      left: calc(50% - 1.5rem);
    }
  }
  h2 {
    font-size: 40px;
    line-height: 50px;
  }
  .cate {
    margin-bottom: 1vh;
    border-radius: 1.5rem;
}
.loc {
  margin-bottom: 1vh;
  border-radius: 1.5rem;
}
  h4{
    font-size: 25px;
    line-height: 50px;
    letter-spacing: -1px;
  }
  h4{
    font-size: 20px;
    line-height: 50px;
    margin-bottom: 5px;
  }
  p{
    font-size: 20px;
    line-height: 50px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  .desc{
    margin-top: 5vh;
  }
`