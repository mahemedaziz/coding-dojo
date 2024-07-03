import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { AiOutlinePlus } from 'react-icons/ai';
import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';

const BookingSection = () => {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState([]);
    const [totalPaid, setTotalPaid] = useState(0); // État pour suivre le montant total payé

    let { data, error } = useSWR("/user-bookings", () => axios.get("/user-bookings").then((res) => setBookingData(res.data)));

    const deleteHandler = async (booking) => {
        try {
            const { data } = await axios.delete(`/bookings/${booking._id}`);
            if (data.status) {
                const newData = bookingData.filter((b) => b._id !== booking._id);
                setBookingData(newData);
                toast.success('Delete Successful');
            }
        } catch (error) {
            toast.error('Delete Failed');
        }
    };

    const payHandler = async (booking) => {
        try {
            const { data } = await axios.put(`/bookings/${booking._id}/pay`);
            if (data.status) {
                const newData = bookingData.map((b) => {
                    if (b._id === booking._id) {
                        b.paid = true; // Marquer comme payé
                    }
                    return b;
                });
                setBookingData(newData);
                setTotalPaid(totalPaid + booking.price);
                toast.success('Payment Successful');
            }
        } catch (error) {
            toast.error('Payment Failed');
        }
    };

    return (
        <div className='space-y-10'>
            <div className='flex items-center justify-between'>
                <h3 className='text-3xl font-semibold'> Your Bookings</h3>
                <button className='button w-fit' onClick={() => navigate("/")}>
                    <AiOutlinePlus className='h-5 w-5' />
                </button>
            </div>
            <div className='flex flex-col space-y-3'>
                {bookingData?.map((booking) => (
                    <div
                        key={booking._id}
                        className='w-full flex items-center justify-between'
                    >
                        <div className='flex flex-col font-extralight text-sm '>
                            <p>From : {dayjs(booking.checkin).format("DD/MM/YYYY")}</p>
                            <p>To : {dayjs(booking.checkout).format("DD/MM/YYYY")}</p>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl'> {booking.title}</h3>
                            <p className={`text-sm font-extralight px-2 py-1 rounded-xl ${booking.paid ? 'bg-green-500' : 'bg-red-500'}`}>
                                Payable Amount : {booking.price} DT
                            </p>
                        </div>
                        <div className='space-x-3 text-sm'>
                            <button onClick={() => payHandler(booking)} disabled={booking.paid}>Pay</button>
                            <button onClick={() => deleteHandler(booking)}>Cancel</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-5'>
                <h3 className='text-2xl font-semibold'>Total Paid: {totalPaid} DT</h3>
            </div>
        </div>
    )
}

export default BookingSection;
