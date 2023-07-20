import React from 'react'
import './about.css'
import {BsAwardFill} from 'react-icons/bs'
import {FaUserSecret} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import  { useState, useEffect } from 'react';
import about from '../../assets/me.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img2.jpg';
import img5 from '../../assets/img3.jpg';


const images = [
  img1,
  img2,
  img3,
  img4,
  img5
];
console.log(images)
export const About = () => {
  return (
    <section id ="about" >

          <h5> Get to know me</h5>
          <h2>about</h2>
      
      
      <div className='container about_container'>
          <div className="about_me">
              <div className="about_me_img">
                <Slideshow/>
              </div>
            </div>
                  <div className="about_content">
                  <div className=" about_cards">
                       <article className="about_card">
                          <BsAwardFill />
                          <h5>
                            experience
                          </h5>
                          <small>2+ years of webdevelopment</small>
                       </article>
                       <article className="about_card">
                          <FaUserSecret />
                          <h5>
                            clients
                          </h5>
                          <small>2+ years of webdevelopment</small>
                       </article>
                       <article className="about_card">
                          <AiFillFolderOpen />
                          <h5>
                            projects
                          </h5>
                          <small>2+ years of webdevelopment</small>
                        </article>
                  </div>
                  <article className="">
                          <p>Lorem Ipsum le Lorem Ipsum le Lorem Ipsum le Lorem Ipsum le Lorem Ipsum le Lorem Ipsum le Lorem Ipsum le</p>
                          <a href="#contact" className="btn btn-primary">Let's Talk</a>
                       </article>
                       </div>
              </div>
      
      </section >
  )
}


function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slideshow-image ${
            currentImage === index ? 'active' : ''
          }`}
        />
      ))}
    </div>
  );
}

export default Slideshow;
