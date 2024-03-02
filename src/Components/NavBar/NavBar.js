
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { ExternalLink } from 'react-external-link';

function NavBar({Navimg}) {
    const [threeLine,setThreeLine]=useState(true);
    const [toggleActive,setToggleActive]=useState(false);
    function handlethreelines(){
        setThreeLine(!threeLine);
        setToggleActive(!toggleActive);
    }
    const vhToPixels = (valueInVh) => {
        const windowHeight = window.innerHeight;
        return (valueInVh * windowHeight) / 100;
      };
    
      const handleHomeClick = () => {
        animateScroll.scrollToTop({
          duration: 500,
          smooth: true,
        });
      };
      function handlebuttonClick() {
        setToggleActive(!toggleActive);
        setThreeLine(!threeLine);
      }
  return (
    <div className='font-all text-2xl z-40 bg-stone-950 text-white fixed h-[10vh] w-screen flex flex-col '>
        <div className='flex flex-row' >
        <div className='w-3/4 md:w-1/4  flex flex-row'>
            <img className='h-[10vh]  w-fit ' src={Navimg} alt='Navbarimg'></img>
        </div>
        <div className='hidden w-full h-[10vh] md:flex'>
            <div className=" w-full h-full md:flex flex-row justify-start items-center gap-10">
                <div className="">
                    <ScrollLink className='Navbar__Link' to="Home" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick}>
                    <span className='navName'>Home</span>
                </button>
                </ScrollLink>
            </div>
            <div>
                <ScrollLink className='Navbar__Link' to="Skills" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick}>
                    <span className='navName'>Skills</span>
                </button>
                </ScrollLink>
            </div>
            <div>
                <ScrollLink className='Navbar__Link' to="projects" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick}>
                    <span className='navName'>Projects</span>
                </button>
                </ScrollLink>
            </div>
            <div>
                <ScrollLink className='Navbar__Link' to="Contact" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick}>
                    <span className='navName'>Contact</span>
                </button>
                </ScrollLink>
            </div>
            <div >
                <ExternalLink href='https://drive.google.com/file/d/1fjCTj29EgzQeXgV7oQIBeBj92k7TywZ_/view'>Resume</ExternalLink>
            </div>
            </div>
        </div>
        <div className='w-1/4 h-[10vh] md:hidden  flex justify-center items-center'>
         <button onClick={handlethreelines}>
            {threeLine?<HiBars3 size={40}></HiBars3>:<FaXmark size={40}></FaXmark>} 
         </button>
        </div>
        </div>
       <div>

        {toggleActive && <div className=' w-full md:hidden backdrop-blur-3xl text-start'>
            <div className="w-full h-fit flex flex-col justify-center items-start ml-5 gap-1 ">
                <div className="h-10 w-11/12 flex items-center text-xl ">
                    <ScrollLink className='Navbar__Link w-full' to="Home" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick} className="w-full text-start">
                    <span className='navName'>Home</span>
                </button>
                </ScrollLink>
            </div>
            <div className="h-10 w-11/12 flex items-center text-xl ">
                <ScrollLink className='Navbar__Link w-full' to="Skills" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick} className="w-full text-start">
                    <span className='navName'>Skills</span>
                </button>
                </ScrollLink>
            </div>
            <div className="h-10 w-11/12 flex items-center text-xl ">
                <ScrollLink className='Navbar__Link w-full' to="projects" smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick} className="w-full text-start">
                    <span className='navName'>Projects</span>
                </button>
                </ScrollLink>
            </div>
            <div className="h-10 w-11/12 flex items-center text-xl ">
                <ScrollLink className='Navbar__Link w-full' to="Contact"  smooth={true} duration={500} offset={-vhToPixels(10)} onClick={handleHomeClick}>
                <button onClick={handlebuttonClick} className="w-full text-start ">
                    <span className='navName'>Contact</span>
                </button>
                </ScrollLink>
            </div>
            <div className="h-10 w-11/12 flex items-center text-xl ">
                <ExternalLink className="w-full" href='https://drive.google.com/file/d/1fjCTj29EgzQeXgV7oQIBeBj92k7TywZ_/view'>Resume</ExternalLink>
            </div>
            </div>
        </div>}
       
       </div>

    </div>
  )
}

export default NavBar