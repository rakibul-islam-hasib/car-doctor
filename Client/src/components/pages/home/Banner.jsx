import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className='min-h-[70vh] bg-cover' style={{ backgroundImage: `url(${img1})` }}>
            <div
                style={{ background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)' }}
                className="h-[70vh] items-center text-white flex">
                <div className="w-[50%] ml-[80PX]    ">
                    <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-4 mt-9">
                        <button className='bg-primary px-5 py-3 font-bold rounded-lg'>Discover More</button>
                        <button className='border-gray-300 hover:border-primary hover:text-primary duration-300 border text-gray-300 px-5 py-3 font-bold rounded-lg'>Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;