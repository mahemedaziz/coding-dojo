import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import useSWR from 'swr';
import { setCar } from '../../redux/slices/carSlice';

const CarsSection = () => {
    const dispatch = useDispatch()
    const { data, error } = useSWR("/car", () => axios.get("/car").then((res) => res.data))

    console.log(data)

    return (
        <div className='overflow-x-scroll relative w-full bg-gradient-to-b shadow-2xl from-black to-slate-700 min-h-[500px] p-5 flex items-center'>
            <div className='z-20 flex items-center space-x-5 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 md:space-x-0'>
                {data?.map((car) => (
                    <div
                        key={car._id}
                        className='flex flex-col w-72 md:w-full flex-shrink-0'>
                        <img
                            src={car.imageUrl}
                            className='h-72 w-full object-cover rounded-xl'
                            alt='car'
                        />
                        <div className='p-3 space-y-1'>
                            <h3 className='font-bold'>{car.title}</h3>
                            <p className='text-sm font-semibold'> {car.price} DT per Day</p>
                            <p className='text-sm font-extralight italic line-clamp-3'>{car.description}</p>
                            <button
                                onClick={() => {
                                    dispatch(setCar(car));
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth"
                                    });
                                }}
                                className='button'
                            >Choose</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarsSection