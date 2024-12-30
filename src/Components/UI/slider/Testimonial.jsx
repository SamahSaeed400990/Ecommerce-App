import React from 'react'
import Slider from "react-slick";
import ava1 from '../../../Assets/images/ava-1.jpg'
import ava2 from '../../../Assets/images/ava-2.jpg'
import ava3 from '../../../Assets/images/ava-3.jpg'
import '../../../styles/testimonial.css'
const Testimonial = () => {

    const setting ={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1
    }
  return <>
    <Slider {...setting}>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, est deserunt 
            reprehenderit aperiam voluptatem optio corporis consequatur beatae 
            aliquam impedit eos cupiditate quis ipsam dolore porro quas quod, nihil similique!
        </p>
        <div className='slider_content d-flex align-item-center gap-3'>
            <img src={ava1} alt="avatar1" className='w-25 rounded' />
            <h6>Jhon Deo</h6>
        </div>
      </div>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, est deserunt 
            reprehenderit aperiam voluptatem optio corporis consequatur beatae 
            aliquam impedit eos cupiditate quis ipsam dolore porro quas quod, nihil similique!
        </p>
        <div className='slider_content d-flex align-item-center gap-3'>
            <img src={ava2} alt="avater2" className='w-25 rounded' />
            <h6>Mitchel Marsh</h6>
        </div>
      </div>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, est deserunt 
            reprehenderit aperiam voluptatem optio corporis consequatur beatae 
            aliquam impedit eos cupiditate quis ipsam dolore porro quas quod, nihil similique!
        </p>
        <div className='slider_content d-flex align-item-center gap-3'>
            <img src={ava3} alt="avatar3" className='w-25 rounded' />
            <h6> Steven Creck</h6>
        </div>
      </div>
       
    </Slider>
  </>
}

export default Testimonial