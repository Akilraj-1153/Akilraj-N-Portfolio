import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExternalLink } from 'react-external-link';
import { IoNavigate } from "react-icons/io5";
import gsap from 'gsap';

function Project({ProjectImages}) {

  useGSAP(()=>{
        
    gsap.registerPlugin(ScrollTrigger)
    let tl=gsap.timeline({scrollTrigger:{
        trigger:'.projcontainer',
        start:"top center"
    }});

    tl.fromTo('.projcontainer',{opacity:0},{opacity:1})
});

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const projTitles = [
    'Rock paper scissor',
    'Etch-a-Sketch Color Game',
    'SIMPLE CALCULATOR',
    'FLAMES'
  ];

  const projDescriptions = [
    'Enjoy a digital twist on the classic Rock, Paper, Scissors game. Crafted with HTML, CSS, and JavaScript, this interactive experience brings timeless fun to your fingertips.',
    'Immerse yourself in nostalgia with our digital Etch-a-Sketch Color Game. Using HTML, CSS, and JavaScript, this game transforms the classic toy into a vibrant canvas, allowing you to draw and paint with a virtual twist.',  
    'Streamline your calculations with our sleek and user-friendly Simple Calculator. Developed using HTML, CSS, and JavaScript, it offers a smooth interface for basic arithmetic, making number crunching a breeze.',
    'FLAMES is a fun game that predicts the relationship between two people based on the acronym: Friends, Lovers, Affectionate, Marriage, Enemies, Siblings.'
  ];

  const projLinks = [
    'https://akilraj-1153.github.io/React-js-Rock_paper_scissors/',
    'https://akilraj-1153.github.io/Odin-Student-Etch-a-Sketch/',
    'https://akilraj-1153.github.io/Odin-Student-Calculator/',
    'https://akilraj-1153.github.io/Flames-WebApp-by-AKIL/'
  ];
  return (
    <div className='projcontainer  font-all  text-white h-[90vh] flex flex-col w-screen sm:flex-row'>
      <div className=' h-2/5 flex justify-center items-center sm:h-full sm:w-1/4'>
      <div className='text-2xl font-all flex'>
          <dl className='flex flex-col justify-center items-center'>
              <dt className='text-5xl text-center'>Projects</dt>
              <dd className='mt-5'>Rock paper scissors</dd>
              <dd className=''>Etch-a-Sketch</dd>
              <dd className=''>Calculator</dd>
              <dd className=''>Flames</dd>
          </dl>
          </div>
      </div>
      <div className=' h-4/5 sm:h-full sm:w-3/4'>
      <Slider  {...settings} >
            {ProjectImages.map((project, index) => (
              <div className="  w-screen h-screen lg:h-[90vh] flex justify-start items-center" key={index}>
                <div className=" w-full h-[30vh] lg:h-[60vh]  flex justify-center items-center">
                  <img className="h-3/4 w-4/4 rounded-lg" src={project} alt={`Project ${index}`} />
                </div>
                <div className="w-full lg:h-[30vh] p-2 flex justify-center items-center flex-col">
                  <div id='' className=' flex gap-2 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-20'>
                    <h2 className='text-2xl'>{projTitles[index]}</h2>
                  <button className='bg-red-600 rounded-lg h-10 w-40 flex flex-row justify-center items-center'><ExternalLink className='w-full flex justify-center items-center flex-row' href={projLinks[index]}><span>Visit the page</span><IoNavigate /></ExternalLink></button>
                  </div>
                  <p className=' text-center w-11/12 mt-5'>{projDescriptions[index]}</p>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  )
}

export default Project