import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='mt-24'>
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-primary">Services</h1>
                <p className='text-6xl font-bold  my-4'>Our Service Area</p>
                <p className='text-secondary my-4 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(item => <div key={item._id} className="card w- bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.img} alt="Shoes" className="rounded-xl h-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.title}</h2>
                            <p>Price : {item.price}$</p>
                            <div className="card-actions">
                                <button onClick={()=>navigate(`/checkout/${item._id}`)} className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* Outline button */}
            <div className="text-center my-20">
                <button className='px-4 py-2 border-2 font-bold hover:bg-primary  hover:text-white duration-200  border-primary rounded-lg '>More Services</button>
            </div>
        </div>
    );
};

export default Services;