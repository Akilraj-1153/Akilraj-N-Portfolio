import React from 'react'
import CircleBar from './CircleBar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function Skill({Skillimages}) {
    const SkillName = ['C','HTML', 'CSS', 'JAVASCRIPT', 'REACT JS', 'GSAP'];
    const skillPercentage = [60,80, 80, 60, 50, 40];
    useGSAP(()=>{
        
        gsap.registerPlugin(ScrollTrigger)
        let tl=gsap.timeline({scrollTrigger:{
            trigger:'.skillcontainer',
            start:"top center"
        }});

        tl.fromTo('.skillcontainer',{opacity:0},{opacity:1})
    });
  return (
    <div className='skillcontainer h-[90vh] w-screen text-white flex flex-col sm:flex-row'>
        <div className=' w-full h-3/5 sm:h-full'>

        <div className='h-full flex flex-col justify-center items-center'>
                    <div className='skillText1 w-full h-[10%] text-xl font-all flex justify-center items-center'>
                        <h1 className='lg:text-5xl mt-5 text-4xl'>Technical Skill</h1>
                    </div>
                    <div className=' lg:w-3/4 grid grid-cols-2 grid-rows-3 gap-1 md:grid-cols-3 md:grid-rows-2  lg:place-content-center lg:place-items-center place-content-center w-full h-[90%] place-items-center'>
                            <div className="circlebar c1 w-full h-full flex justify-center items-center     ">
                                <CircleBar percentage={skillPercentage[0]} skillname={SkillName[0]} />
                            </div>
                            <div className="circlebar c2 w-full h-full flex justify-center items-center     ">
                                <CircleBar percentage={skillPercentage[1]} skillname={SkillName[1]} />
                            </div>
                            <div className="circlebar c3 w-full h-full flex justify-center items-center    ">
                                <CircleBar percentage={skillPercentage[2]} skillname={SkillName[2]} />
                            </div>
                            <div className="circlebar c4 w-full h-full flex justify-center items-center    ">
                                <CircleBar percentage={skillPercentage[3]} skillname={SkillName[3]} />
                            </div>
                            <div className="circlebar c5 w-full h-full flex justify-center items-center    ">
                                <CircleBar percentage={skillPercentage[4]} skillname={SkillName[4]} />
                            </div>
                            <div className="circlebar c6 w-full h-full flex justify-center items-center    ">
                                <CircleBar percentage={skillPercentage[5]} skillname={SkillName[5]} />
                            </div>
                </div>
            </div>

        </div>
        <div className='w-full sm:h-full  h-2/5'>
        <div className='flex flex-col justify-center items-center h-full '>
                <div className='skillText2 w-full h-[10%] text-xl font-all flex justify-center items-center md:p-3 '>
                    <h1 className='lg:text-5xl mt-10 text-4xl' >Designing Skill</h1>
                </div>
                <div className='h-[90%]  w-full flex flex-row justify-center lg:items-center ' >
                    <div className='skillimg  h-full  w-1/3 md:w-1/4  md:h-3/4 lg:h-[20vh] lg:w-[15vw] flex flex-row justify-start items-center'>
                        <img src={Skillimages[0]} alt='skill1'></img>
                    </div>
                    <div className='skillimg  h-full  w-1/3  md:w-1/4 md:h-3/4 lg:h-[20vh] lg:w-[15vw] flex flex-row justify-center items-center'>
                        <img src={Skillimages[1]} alt='skill1'></img>
                    </div>
                    <div className=' skillimg  h-full w-1/3  md:w-1/4 md:h-3/4 lg:h-[20vh] lg:w-[15vw] flex flex-row justify-center items-center'>
                        <img src={Skillimages[2]} alt='skill1'></img>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Skill