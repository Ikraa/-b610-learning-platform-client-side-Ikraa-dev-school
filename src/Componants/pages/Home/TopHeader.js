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
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777046/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://www.freecodecamp.org/news/content/images/2022/06/1-1.png" alt="" />
          </div>
          <div className=''>
            <img className='h-[400px] w-[90%] ml-2 object-cover' src="https://www.freecodecamp.org/news/content/images/2021/08/html.png" alt="" />
          </div>
         
          
        </Slider>
      </div>
        </div>
    );
};

export default TopHeader;
