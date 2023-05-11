import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProviders';

const Booking = () => {
    const {user} = useContext(AuthContext); 
    const [data, setData] = useState([]); 
    useEffect(()=>{
        fetch(`http://localhost:5000/ordered?email=${user.email}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])
    console.log(data)
    return (
        <div>
            <h1 className='text-center text-4xl my-7 font-bold '>Total Order : <span className='text-primary'>{data.length}</span></h1>
        </div>
    );
};

export default Booking;