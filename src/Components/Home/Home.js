import React from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

function Home({Homeimg}) {

useGSAP(()=>{
  const tl=gsap.timeline();
  const mm=gsap.matchMedia();

  mm.add('(max-width:767px)',()=>{
  tl.fromTo('.hello',{opacity:0,},{opacity:1,stagger:0.2})
  tl.fromTo('.name',{opacity:0,},{opacity:1,stagger:0.2})
  tl.fromTo('.role',{opacity:0,y:100},{opacity:1,duration:1,y:0,stagger:0.2})
  tl.fromTo('.Homeimg',{opacity:0,y:100},{opacity:1,duration:1,y:0,stagger:0.2})
  })

  mm.add('(min-width:767px)',()=>{
    tl.fromTo('.hello',{opacity:0,},{opacity:1,stagger:0.2})
    tl.fromTo('.name',{opacity:0,},{opacity:1,stagger:0.2})
    tl.fromTo('.role',{opacity:0,x:100},{opacity:1,duration:1,x:0,stagger:0.2})
    tl.fromTo('.Homeimg',{opacity:0,y:100},{opacity:1,duration:1,y:0,stagger:0.2})
    })
})

  return (
    <div className='  relative text-white  h-[100vh] flex flex-col sm:flex-row'>
      <div className=' w-full h-2/5 sm:h-full sm:w-3/4 flex justify-center items-center'>

        <div className='p-3'>
        <div>
        <div className='mt-[10vh]'>
        <div className='text-4xl align-start font-all md:text-6xl p-3'>
        <span className='hello'>Hello</span>
        <span className='hello'>👋🏼</span>
        <span className='hello'>.</span>
        <span className='hello'>. </span>
        <span className='hello'>I,m</span>
        </div>
        <div className='text-7xl font-all flex flex-col xl:flex-row  md:text-9xl '>
        <div>
        <span className='name'>A</span>
          <span className='name'>k</span>
          <span className='name'>i</span>
          <span className='name'>l</span>
          <span className='name'>r</span>
          <span className='name'>a</span>
          <span className='name'>j</span>
        </div>
         
          <span className='text-2xl xl:text-4xl flex gap-2 justify-end items-end'>
            <div className='role'>
            <span className='  w-fit '>Frontend</span>
            </div>
            <div className='role'>
            <span className='  w-fit '>Developer</span>
            </div>
            <div className='role'>
            <span className='  w-fit '> and </span>
            </div>
            <div className='role'>
            <span className='  w-fit '> Designer </span>
            </div>
            <div className='role'>
            <span className='  w-fit '> .</span>
            </div>

          </span>
        </div>
        </div>
      </div>
        </div>

      </div>
      <div className=' w-full h-full md:h-full md:w-2/6 flex justify-center items-center'>
      <div className=' w-4/6 h-full flex justify-center items-center '>
            <img src={Homeimg} alt='Homephoto' className='Homeimg w-fit h-fit rounded-xl brightness-75'></img>
          </div>
      </div>
    </div>
  )
}

export default Home