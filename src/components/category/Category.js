import React from 'react';
import fashion from '../../Assets/fashion.jpg';
import bussiness from '../../Assets/bussiness.jpg';
import fun from '../../Assets/fun.jpg';
import health from '../../Assets/health.jpg';
import life from '../../Assets/life.jpeg';
import sport from '../../Assets/sport.jpg';
import technology from '../../Assets/technology.jpg';
import travel from '../../Assets/travel.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MdNavigateNext} from 'react-icons/md'
import {GrFormPrevious} from 'react-icons/gr'
import './Category.css'

const category = [
  {
    id: 1,
    category: "Life",
    title: "Stay Calm And Surf",
    cover: life,
  },
  {
    id: 2,
    category: "Fashion",
    title: "Becoming a Dragonfly",
    cover: fashion,
  },
  {
    id: 3,
    category: "Travel",
    title: "There's always light at the end of the tunnel",
    cover: travel,
  },
  {
    id: 4,
    category: "Sport",
    title: "Stay Calm And Surf",
    cover: sport,
  },
  {
    id: 5,
    category: "Fun",
    title: "There's always light at the end of the tunnel",
    cover: fun,
  },
  {
    id: 6,
    category: "Health",
    title: "Becoming a Dragonfly",
    cover: health,
  },
  {
    id: 7,
    category: "Business",
    title: "Stay Calm And Surf",
    cover: bussiness,
  },
  {
    id: 8,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover:technology,
  },
];
const SampleNextArrow = (props) =>{
  const {onClick} = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className="icon"/>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) =>{
  const {onClick} = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className="icon"/>
      </button>
    </div>
  )
}


const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [{
          breakpoint:800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
    }]
  }
  return (
    <>
      <section className='category'>
        <div className='content'>
        <Slider {...settings}>
          {category.map((item) => (
            <div className='boxs' key={item.id}>
              <div className='box'>
                <img src={item.cover} alt={item.title} ></img>
              <div className='overlay'>
                <h4>{item.category}</h4>
                <p>{item.title}</p>
              </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Category;
