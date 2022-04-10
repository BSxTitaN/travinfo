import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

export default function Mainart() {

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

    return (
        <ArticleSection>
            <div className="fl">
            <h2>Articles</h2>
            <Link to="/editarticle" className=''>
                    <input className='btn-l' type="button" value="Add Article" />
            </Link>
            </div>
        {post.map((article) => (
        <div className="artcont">
            <div className="art">
                <div className="content">
                <Link to={`/article/${article.ar_no}`}>
                    <h1 className='title'>{article.ar_title}</h1>
                </Link>
                    <p className='desc'>{article.meta_desc}</p>
                    <div className="author flex">
                      <p>By {article.user_name}</p>
                      <p className='mr-2 ml-2'>•</p>
                      <p>{new Date(article.date).toDateString()}</p>
                    </div>
                </div>
                <div className="img">
                    <img src={article.image} alt="" />
            </div>
            </div>
        </div>
    ))}
        </ArticleSection>
    )
}

const ArticleSection = styled.section`
.btn-l {
    width: 10vw;
    height: 5vh;
    background-color:#0516FA;
    color: #ffffff;
    font-family: "Product Sans";
    font-style: bold;
    border-radius: 1vh;
    cursor: pointer;
}
.fl {
  display: flex;
  justify-content: space-between;
}
.artcont{
    margin-top: 5vh;
    grid-template-rows: auto;
    -ms-grid-columns: 1fr;
    grid-template-columns: repeat(12,1fr);
    grid-template-areas: "text text text text text text text text image image image image";
    padding-bottom: 80px;
}
.art {
    display: flex;
}

.img {
    img {
        width: 50vw;
        height: 45vh;
        border-radius: 12px;
        -webkit-filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
        filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
    }
}

.title{
    font-family: "Product Sans";
    font-weight: bold;
    font-size: 40px;
    width: 45vw;
}
.title:hover {
    text-decoration: underline;
}
.desc {
    font-family: "Product Sans";
    font-weight: normal;
    display: inline-block;
    font-size: 20px;
    width: 40vw;
    margin-top: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.author {
    font-family: "Product Sans";
    font-weight: normal;
    font-size: 20px;
    width: 30vw;
    margin-top: 1rem;
}
@media (min-width: 36rem) and (max-width: 62.5rem) {
    .btn-l {
    width: 17vw;
}
.art {
    flex-direction: column-reverse;
}
.img {
    img {
        object-fit: cover;
        object-position: center;
        width: 100vw;
        border-radius: 12px;
        -webkit-filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
        filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
    }
}
.artcont{
    padding-bottom: 20px;
}
.title{
    margin-top: 1rem;
    font-size: 45px;
    width: 90vw;
}
.desc {
    font-size: 20px;
    width: 85vw;
    margin-top: 0.3rem;
    -webkit-line-clamp: 3;
}
.author {
    font-size: 20px;
    width: 50vw;
    margin-top: 0.5rem;
}
}
@media (max-width: 36rem) {
    .btn-l {
    width: 27vw;
}
.art {
    flex-direction: column-reverse;
}
.artcont{
    padding-bottom: 20px;
}
.img {
    img {
        object-fit: cover;
        object-position: center;
        width: 100vw;
        border-radius: 12px;
        -webkit-filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
        filter: drop-shadow(0 8px 6px rgba(0,0,0,.25));
    }
}
.title{
    margin-top: 1rem;
    font-size: 25px;
    width: 90vw;
}
.desc {
    font-size: 15px;
    width: 85vw;
    margin-top: 0.3rem;
    -webkit-line-clamp: 2;
}
.author {
    font-size: 15px;
    width: 60vw;
    margin-top: 0.5rem;
}
}
`