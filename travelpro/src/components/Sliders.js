import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export const GetStaticProps = async () => {
//   const res = await fetch('https://my-json-server.typicode.com/BSxTitaN/traveldata/sliders');
//   const data = await res.json();

//   return {
//     props: { harsh: data },
//   }
// }

// {harsh.map((harshp) => (
//   <div key={harshp.id}>
//     <h1 className="hed1">{ harshp.title }</h1>
//     <p className="para1">{ harshp.desc }</p>
//   </div>
// ))}

export default function SimpleSlider(){

  var settings = {
    infinite: true,
    speed: 5,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <LoginSection className="loginn">
    <Slider {...settings}>
    <div className="slide">
          <img className="logo" src="images/Travinfo1.png" alt="example" />
          <img className="imgi" src="images/1.png" alt="example" />
          <h1 className="hed1">Explore India deeper with us</h1>
          <p className="para1">
          From the beaches of sun-soaked Goa to the frenetic bazaars of Mumbai, India offers wealth of vastly different, yet equally enthralling, experiences. Explore the sparkling lakes and palaces of Udaipur, watch traditional Indian dance in Kochi, or buy brilliantly-colored silk saris at a market in Varanasi… no matter how much you travel in India, you will always find more to discover in this vibrant, fascinating country.
          </p>
        </div>
        <div className="slide">
        <img className="logo" src="images/Travinfo1.png" alt="example" />
          <img className="imgi" src="images/3.png" alt="example" />
          <h1 className="hed2">The Paradise on the Earth</h1>
          <p className="para2">
            The valley of Kashmir is as rich with history and political
            controversy as it is with culture and natural phenomena. Sample
            exquisitely spiced native cuisines and festive teas, then walk off
            your meal along the rugged trekking routes to the north. Marvel at
            the famous houseboats of Srinagar and take a spiritual moment to
            reflect at one of the many pilgrimage sites and religious shrines
            that dot the region. Of course, native craftsmanship makes for
            excellent souvenirs—carpets and textiles are an especial shopping
            must.
          </p>
        </div>
        <div className="slide">
        <img className="logo" src="images/Travinfo1.png" alt="example" />
          <img className="imgi" src="images/2.png" alt="example" />
          <h1 className="hed3">World Famous Mysuru Palace</h1>
          <p className="para3">
          Welcome to the Royal Splendour of Mysuru, the home of the Wodyers who ruled Mysuru for more than 500 years, known as the City of Palaces, Mysuru retains a quaint charm, that never fails to enchant. Mysuru is a popular tourist destination, offering several attractions ranging from the royal splendour of Mysuru City and its fabulous Dasara Festival to exquisite temples, pilgrimage centres and scenic spots.
          </p>
        </div>
        <div className="slide">
        <img className="logo" src="images/Travinfo1.png" alt="example" />
          <img className="imgi" src="images/4.png" alt="example" />
          <h1 className="hed3">The Rich and Cultural Sikkim</h1>
          <p className="para3">
            This state is famous for dazzling waterfalls, virgin forests,
            Tibetan style Buddhist Gompas, alpine meadows, rhododendron flowers
            and more. Kanchenjunga (also Kanchendzonga) at 8598 m is the third
            highest peak in the world, and lies in Sikkim which is located in
            the northeastern part of the country, in the eastern Himalayas and
            is one the smallest state in the whole country., bordered by the
            Tibet Autonomous Region of China to the north and northeast, by
            Bhutan to the southeast, by the Indian state of West Bengal to the
            south, and by Nepal to the west.
          </p>
        </div>
    </Slider>
    </LoginSection>
  );
}
// import Slider from "@madzadev/image-slider";
// import "@madzadev/image-slider/dist/index.css";

// export default function SimpleSlider() {
//   const images = [
//     { url: "/1.jpg" },
//     { url: "/2_auto_x2.jpg" },
//     { url: "/3.png" },
//   ];
//   return (
//     <LoginSection>
//       <Slider
//         loop={true}
//         autoPlay={true}
//         imageList={images}
//         width={1000}
//         height={663}
//         autoPlayInterval={3000}
//         showArrowControls={false}
//         showDotControls={false} // in milliseconds
//       />
//     </LoginSection>
//   );
// };


const LoginSection = styled.section`
position: absolute;
width: 100vw;
height: 100vh;
overflow: none;
  .logo {
    position: absolute;
    left: 5vh;
    top: 4vh;
    width: 100px;
    height: 50px;
  }
  .slide {
    position: relative;
  }
  .slide .imgi {
    width: 100vw;
    height: 100vh;
  }
  .hed1 {
    position: absolute;
    top: 54%;
    left: 2%;
    right: 50%;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 77px;
    /* or 161% */
    color: #ffffff;
    word-wrap: break-word;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  }
  .hed2 {
    position: absolute;
    top: 54%;
    left: 2%;
    right: 50%;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 77px;
    /* or 161% */
    color: #ffffff;
    word-wrap: break-word;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  }
  .hed3 {
    position: absolute;
    top: 54%;
    left: 2%;
    right: 50%;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 77px;
    /* or 161% */
    color: #ffffff;
    word-wrap: break-word;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  }
  .para1 {
    position: absolute;
    word-wrap: break-word;
    left: 2%;
    top: 65%;
    right: 50%;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    /* or 167% */
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  .para2 {
    position: absolute;
    word-wrap: break-word;
    left: 2%;
    top: 65%;
    right: 50%;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    /* or 167% */
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  .para3 {
    position: absolute;
    word-wrap: break-word;
    left: 2%;
    top: 65%;
    right: 50%;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    /* or 167% */
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  @media(max-device-width: 480px) and (min-device-width: 320px)
  {
    .slide .imgi{
      display: none;
    }
  }
  @media(max-device-width: 1025px) and (min-device-width: 500px)
  {
    .slide .imgi{
      display: none;
    }
  }
`;