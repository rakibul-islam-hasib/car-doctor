import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'; 
import person from '../../../assets/images/about_us/person.jpg'; 
const About = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center md:text-left text-center my-14 gap-20 justify-center'>
            <div className="w-1/3  mt-6 relative">
                <img src={person} className='' alt="" />
                <img src={parts} className='absolute w-[70%] border-8 border-white -right-10 -bottom-7' alt="" />
            </div>
            <div className="w-1/2">
                <h1 className='font-bold text-primary text-2xl'>About Us</h1>
                <h1 className='text-5xl leading-[60px] font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className='text-secondary font-medium my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-secondary font-medium'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='text-white bg-primary px-5 rounded-lg mt-3 py-3 font-bold '>Get More Info</button>
            </div>
        </div>
    );
};

export default About;