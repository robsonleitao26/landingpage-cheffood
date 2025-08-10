import React, { useEffect, useRef, useState } from 'react'
import food1 from '../../assets/img/image-01.png' 
import food2 from '../../assets/img/image-02.png' 
import food3 from '../../assets/img/image-03.png' 
import food4 from '../../assets/img/image-04.png' 

export function Index() {

  const controls = [
    {thumb: food1, label: 'Roll'},
    {thumb: food2, label: 'Pasta'},
    {thumb: food3, label: 'Spicy Roll'},
    {thumb: food4, label: 'Sandwich'},
  ];

  const slides = [food1, food2, food3, food4];
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = setInterval(()=>{
      setActiveIndex(prev => (prev + 1) % slides.length)
    }, 2000)
  }

  const stopAutoRotate = () => {
    if(intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleControlClick = (index) => {
    stopAutoRotate();
    setActiveIndex(index)
  }

  useEffect(()=>{
    startAutoRotate();
    return stopAutoRotate;
  }, [])

  return (
    <div className="main">
      {/* social icons */}
      <div className="social-icons">
        <a href="#"><i className='ri-facebook-circle-fill'></i></a>
        <a href="#"><i className='ri-instagram-fill'></i></a>
        <a href="#"><i className='ri-twitter-x-fill'></i></a>
        <a href="#"><i className='ri-pinterest-fill'></i></a>
      </div>

      {/* hero content */}
      <div className="hero-content">
        <h1><span>Delicious, Tasty <br /> & Fresh</span> Meal <br /></h1>
        <p>
          Click any food card below to see it rotate into view on the circular
          image slider. <br />
          The rotation follows the edge of the circle in an anti-clockwise
          direction!
        </p>
        <a href="#" className="explore-btn">
          Explore menu 
          <span className='arrow'>
            <i className="ri-arrow-right-line"></i>
          </span>
        </a>

        {/* food controls */}
        <div className="controls">
          {controls.map((item, index)=>(
            <div
              key={index}
              className={`control ${activeIndex === index ? 'active' : ''}`}
              data-index={index+1}
              onClick={()=>handleControlClick(index)}
            >
              <img src={item.thumb} alt={item.label} />
              <h3>{item.label}</h3>
              <p>Details About {item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* slideshow */}
      <div className="slideshow"> 
        <div
          className='carousel'
          onMouseEnter={stopAutoRotate}
          onMouseLeave={startAutoRotate}
          style={{transform: `rotate(-${activeIndex * 90}deg)`}}
        >
          {slides.map((img, index)=> (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={img} alt={`slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}