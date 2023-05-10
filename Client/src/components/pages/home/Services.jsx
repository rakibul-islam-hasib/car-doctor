import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/car-doctor-resources/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services)
    return (
        <div className='mt-24'>
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-primary">Services</h1>
                <p className='text-6xl font-bold  my-4'>Our Service Area</p>
                <p className='text-secondary my-4 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="">
                {
                    services.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;