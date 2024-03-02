

import React, { useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from 'react-external-link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

function Contact() {
    const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
    .sendForm('service_jwrem8k', 'template_ev9jd6t', form.current, {
      publicKey: 'A4mzb36nfjQshXKDV',
      })
      .then(
        (result) => {
          toast.success('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            toast.dismiss();
          }, 2000); // hide message after 5 seconds
        },
        (error) => {
          toast.error('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            toast.dismiss();
          }, 2000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    let tl=gsap.timeline({scrollTrigger:{
        trigger:'.contactcontainer',
        start:"top center"
    }});

    tl.fromTo('.contactcontainer',{
        opacity:0
    },{
        opacity:1
    })
    tl.fromTo('.contacttext',{
      opacity:0
  },{
      opacity:1
  })
  tl.fromTo('.contacticon',{
        opacity:0,
        y:-100
      
    },{
        opacity:1,
        y:0,
        stagger:0.3,
        duration:0.5

    })
    tl.fromTo('.form',{
      opacity:0,
      y:-200,
    },{
      opacity:1,
      y:0,
      duration:0.3


    })
    // tl.fromTo('.nameip',{
    //   opacity:0,
    //   x:200,

    // },{
    //   opacity:1,
    //   x:0,
    //   duration:0.3
      

    // })
    // tl.fromTo('.emaillabel',{
    //   opacity:0,
    //   x:-200,

    // },{
    //   opacity:1,
    //   x:0,
    //   duration:0.3


    // })
    // tl.fromTo('.emailip',{
    //   opacity:0,
    //   x:200,

    // },{
    //   opacity:1,
    //   x:0,
    //   duration:0.3


    // })
    // tl.fromTo('.textlabel',{
    //   opacity:0,
    //   x:-200,

    // },{
    //   opacity:1,
    //   x:0,
    //   duration:0.3


    // })
    // tl.fromTo('.textip',{
    //   opacity:0,
    //   x:200,
    // },{
    //   opacity:1,
    //   x:0,
    //   duration:0.3


    // })
    // tl.fromTo('.submitbtn',{
    //   opacity:0,
    //   y:200
    // },{
    //   opacity:1,
    //   y:0,
    //   duration:0.3


    // })

        


})
  return (
    
    <div className="contactcontainer h-[90dvh] text-white font-all w-screen   flex flex-col justify-center items-center">
      <div className=' w-screen flex flex-col justify-center items-center gap-5'>
      <div className='contacttext p-3'>
        <h2 className='text-2xl'>Contact me in</h2>
      </div>
      <div className=' flex flex-row gap-10 p-2'>
        <button className="contacticon">
          <ExternalLink href='https://www.linkedin.com/in/akilrajn1153'><FaLinkedinIn size={35} className="icon" /></ExternalLink>
        </button>
        <button className="contacticon">
          <ExternalLink href='https://github.com/Akilraj-1153'><FaGithub size={35} className="icon"></FaGithub></ExternalLink>
        </button>
        <button className="contacticon">
          <ExternalLink href='https://instagram.com/iam_akil_20?igshid=YTQwZjQ0NmI0OA=='><RiInstagramFill size={35} className="icon"></RiInstagramFill></ExternalLink>
        </button>
        <button className="contacticon">
          <ExternalLink href='https://x.com/Akilraj1153?t=nclAtn7CQGL7vEhqIDB3pA&s=08'><FaXTwitter size={35} className="icon"></FaXTwitter></ExternalLink>
        </button>
      </div>
      </div>
      
      <div className='form w-3/4  p-5 m-5 rounded-xl md:w-1/4 lg:1/4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col h-auto max-h-50 w-auto gap-2'>
          <label className='namelabel'>Name</label>
          <input className='nameip rounded-lg h-10 text-black font-sans' type="text" name="user_name" />
          <label className='emaillabel'>Email</label>
          <input className='emailip rounded-lg h-10 font-sans text-black' type="email" name="user_email" />
          <label className='textlabel'>Message</label>
          <textarea className='textip rounded-lg font-sans max-h-40 min-h-20 h-20 text-black' name="message" />
          <input className='submitbtn rounded-lg h-10 bg-blue-500' type="submit" value="Send" />
        </form>
      </div>
    <ToastContainer />
    </div>
  
  )
}

export default Contact