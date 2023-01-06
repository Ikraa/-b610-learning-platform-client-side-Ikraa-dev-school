import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const TopHeader = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
    return (
        <div className='h-[500px]'>
            <div className='container mx-auto mt-[30px]'>
       
        <Slider {...settings}>
         
          
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://static01.nyt.com/images/2022/10/09/multimedia/09sp-learning-online/09sp-learning-online-superJumbo.jpg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://static01.nyt.com/images/2022/10/09/multimedia/09sp-learning-online/09sp-learning-online-superJumbo.jpg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://static01.nyt.com/images/2022/10/09/multimedia/09sp-learning-online/09sp-learning-online-superJumbo.jpg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://static01.nyt.com/images/2022/10/09/multimedia/09sp-learning-online/09sp-learning-online-superJumbo.jpg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://static01.nyt.com/images/2022/10/09/multimedia/09sp-learning-online/09sp-learning-online-superJumbo.jpg" alt="" />
          </div>
         
          
        </Slider>
      </div>
        </div>
    );
};

export default TopHeader;
