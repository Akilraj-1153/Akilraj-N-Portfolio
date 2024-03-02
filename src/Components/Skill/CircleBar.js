import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function CircleBar({ percentage, skillname }) {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(`.box-${percentage}`,{
      rotate:0
    }, {
      rotate: 360,
      duration: 1,
      x: 0,
      background: `conic-gradient(aqua ${percentage}%, 0, transparent)`,
      stagger:0.2,
    });

    tl.fromTo(`.percentage-${percentage}`, {
      opacity: 0,
    }, {
      opacity: 1,
    });
    tl.fromTo('.skilname', {
      opacity: 0,
    }, {
      opacity: 1,
    });
    tl.to(`.box-${percentage}`, {
      
      boxShadow: 'rgba(72, 135, 202, 0.8) 0px 0px 100px 10px',
    });
  });

  return (
    <div className='skillcontainer w-fit h-fit relative font-all text-white text-lg  flex lg:flex-col flex-row justify-center items-center gap-1'>
      <div className={`box box-${percentage}  w-[60px] h-[60px]  lg:h-[100px] lg:w-[100px] rounded-full flex justify-center items-center`}>
        <div className='innerbox bg-black h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] rounded-full flex justify-center items-center'>
          <span className={`percentage percentage-${percentage}`}>{percentage}%</span>
        </div>
      </div>
      <div className='skillnamebox  h-[50px] w-[70px] lg:justify-center flex justify-start items-center'>
      <h1 className='skilname'>{skillname}</h1>
      </div>
    </div>
  );
}

export default CircleBar;