import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProviders';
import { FcCallback } from 'react-icons/fc';
import moment from 'moment';
import Swal from 'sweetalert2';
const Booking = () => {
    document.title = 'Booking ';
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/ordered?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setData(data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/ordered/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            fetch(`http://localhost:5000/ordered?email=${user.email}`)
                                .then(res => res.json())
                                .then(data => setData(data))
                                .catch(err => console.log(err))
                        }
                    })
            }
        })

    }
    const handelConfirm = id => {
        setLoading(true)
        fetch(`http://localhost:5000/ordered/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    fetch(`http://localhost:5000/ordered?email=${user.email}`)
                        .then(res => res.json())
                        .then(data => {
                            setData(data);
                            setLoading(false)
                        })
                        .catch(err => { console.log(err); setLoading(false) })
                }
            })
    }
    return (
        <div className='my-10'>
            <h1 className='text-center text-4xl my-7 font-bold '>Total Order : <span className='text-primary'>{data.length}</span></h1>
            <div className="">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>delete</th>
                                <th>Image</th>
                                <th className='ml-3'>Name &nbsp; &&nbsp; Phone</th>
                                <th>Price &nbsp; & DATE</th>
                                <th>Title</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                loading || data.map(item => <tr key={item._id}>
                                    {/* 1st data  */}
                                    <td>
                                        {
                                            item.status ? <div className="">
                                                <span data-tip='Your order is approved' className='tooltip tooltip-right tooltip-accent '>
                                                    <button onClick={() => handelDelete(item._id)} className="btn btn-sm btn-primary btn-circle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </button></span>
                                            </div> : <button onClick={() => handelDelete(item._id)} className="btn btn-sm btn-error btn-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-2xl w-28 h-24">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Second data */}
                                    <td>
                                        <div className="">
                                            <h1 className='text-lg font-bold'>{item.name}</h1>
                                            <p className='inline-flex items-center gap-2'><FcCallback />{item.phone}</p>
                                        </div>
                                    </td>
                                    {/* 3rd data */}
                                    <td>
                                        <h1>{item.price}$</h1>
                                        <h1 className='text-xs font-bold mt-2'>{moment(item.date).format("MMM Do YY")}</h1>
                                    </td>
                                    {/* 4th data */}
                                    <td>
                                        <h1>{item.title}</h1>
                                    </td>
                                    <th className=''>
                                        <div className="flex">
                                            {
                                                loading ? <button className="btn loading btn-success btn-xs">Loading</button>
                                                    : item.status ? <button className="btn btn-primary btn-xs">Approved</button> : <button onClick={() => handelConfirm(item._id)} className="btn btn-ghost btn-xs">Confirm</button>
                                            }

                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </div>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Booking;