import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Banner/pexels-karolina-grabowska-4386466.jpg';
import img2 from '../../assets/Banner/pexels-jonathanborba-13697931.jpg';
import img3 from '../../assets/Banner/pexels-readymade-3850749.jpg';
import img4 from '../../assets/Banner/pexels-weverton-oliveira-927931218-20217787.jpg';
import './Banner.css'; // Create and import a CSS file for custom styles

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img src={img1} alt="Banner 1" className="carousel-image" />
          <h1 className="banner-site text-5xl  mb-3 text-white">
            Your Best Medical <br /> Help Center.........
          </h1>
          <p className="banner-site text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
            Earum placeat similique eaque eum atque magnam asperiores <br />{' '}
            perspiciatis ea non fugit?
          </p>
          <div className="flex justify-start items-center">
            <button className=" banner-site btn-sm btn-outline bg-green-600 mt-3  btn">
              All Service
            </button>
          </div>
        </div>
        <div>
          <img src={img2} alt="Banner 2" className="carousel-image" />
          <h1 className="banner-site text-5xl  mb-3 text-white">
            Your Best Medical <br /> Help Center.........
          </h1>
          <p className="banner-site text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
            Earum placeat similique eaque eum atque magnam asperiores <br />{' '}
            perspiciatis ea non fugit?
          </p>
          <div className="flex justify-start items-center">
            <button className=" banner-site btn-sm btn-outline bg-green-600 mt-3  btn">
              All Service
            </button>
          </div>
        </div>
        <div>
          <img src={img3} alt="Banner 3" className="carousel-image" />
          <h1 className="banner-site text-5xl  mb-3 text-white">
            Your Best Medical <br /> Help Center.........
          </h1>
          <p className="banner-site text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
            Earum placeat similique eaque eum atque magnam asperiores <br />{' '}
            perspiciatis ea non fugit?
          </p>
          <div className="flex justify-start items-center">
            <button className=" banner-site btn-sm btn-outline bg-green-600 mt-3  btn">
              All Service
            </button>
          </div>
        </div>
        <div>
          <img src={img4} alt="Banner 4" className="carousel-image" />
          <h1 className="banner-site text-5xl  mb-3 text-white">
            Your Best Medical <br /> Help Center.........
          </h1>
          <p className="banner-site text-white text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
            Earum placeat similique eaque eum atque magnam asperiores <br />{' '}
            perspiciatis ea non fugit?
          </p>
          <div className="flex justify-start items-center">
            <button className=" banner-site btn-sm  btn-warning mt-3  btn">
              All Service
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
