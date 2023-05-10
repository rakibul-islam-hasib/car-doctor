import React, { useEffect, useState } from 'react';

const PopularProduct = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/car-doctor-resources/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='my-20'>
            <div className="text-center ">
                <h1 className='text-xl font-bold text-primary'>Popular Products</h1>
                <p className='text-4xl font-bold mt-2'>Browse Our Products</p>
                <p className='text-secondary  mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid mx-auto md:grid-cols-2 mt-20 lg:grid-cols-3 gap-6">
                {
                    services.map(item => <div key={item._id} className="card w- bg-base-100 border">
                        <figure className="px-5  relative pt-5">
                            <img src={item.img} alt="Shoes" className="rounded-xl h-[200px]" />
                            <div className="w-[50px] absolute top-8 right-8">
                                <img src="https://i.ibb.co/vcnTdrk/online-shopping.png" className=' ' alt="" />
                            </div>
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{item.title}</h2>
                            <p>Price : {item.price}$</p>
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

export default PopularProduct;