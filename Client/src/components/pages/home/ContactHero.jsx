import React from 'react';

const ContactHero = () => {
    return (
        <div className='my-10 flex flex-col md:flex-wrap lg:flex-row justify-between px-16 py-20 rounded-xl w-full text-white bg-black'>
            <div className="flex items-center gap-4">
                <img className='h-14' src="https://i.ibb.co/dmMBsvF/schedule.png" alt="" />
                <div className="">
                    <p className=''>We are open monday-friday</p>
                    <p className='text-3xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img className='h-14' src="https://i.ibb.co/qBdKvYD/phone.png" alt="" />
                <div className="">
                    <p className=''>Have a question?</p>
                    <p className='text-3xl'>+2546 251 2658</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img className='h-14' src="https://i.ibb.co/4FtcgV7/location.png" alt="" />
                <div className="">
                    <p className=''>We are open monday-friday</p>
                    <p className='text-3xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;