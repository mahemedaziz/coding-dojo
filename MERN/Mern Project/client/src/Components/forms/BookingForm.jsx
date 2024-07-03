import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { selectUser } from '../../redux/slices/userSlice';
import { differenceInCalendarDays } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';

const BookingForm = ({ car, bookingData }) => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const user = useSelector(selectUser);
    let numberOfDays = 0;

    if (watch("checkin") && watch("checkout")) {
        numberOfDays = differenceInCalendarDays(
            new Date(watch("checkout")),
            new Date(watch("checkin"))
        );
    }

    const onSubmitHandler = async (form) => {
        try {
            form["price"] = car.price * numberOfDays;
            form["car"] = car._id;
            await axios.post("/bookings", form, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success("Booking Successful");
            reset();
        } catch (error) {
            if (error.response && error.response.status === 409) {
                const conflictingBooking = error.response.data.bookings[0];
                toast.error(`This date is already booked! \nCheckin: ${dayjs(conflictingBooking.checkin).format("DD/MM/YYYY")}\nCheckout: ${dayjs(conflictingBooking.checkout).format("DD/MM/YYYY")}\nYou can choose another date!`);
            } else {
                toast.error("Booking Failed");
            }
        }
    };

    return (
        <form
            className='flex flex-col items-center space-y-3 bg-slate-700 w-fit px-5 py-3 z-0'
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <h1>Price: {car?.price} DT Per Day </h1>
            <input type="date"{...register("checkin", { required: true })} />
            <input type="date"{...register("checkout", { required: true })} />
            <button type='submit' className='button'> Book </button>
        </form>
    );
}

export default BookingForm;
