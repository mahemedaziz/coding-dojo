import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { closeModal } from '../../redux/slices/uiSlice'
import { toast } from 'react-hot-toast'
import { selectCar, updateUserCars } from '../../redux/slices/carSlice'




const EditCarForm = () => {
    const car = useSelector(selectCar);
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (form) => {
        const { data } = await axios.put(`/car/${car._id}`, form, {
            headers: {
                'Content-Type': 'application/json'
            },

        });
        dispatch(updateUserCars(data.car));
        dispatch(closeModal());
        toast.success('Car updated successfully');
        reset();
        dispatch(setType('add'));


    };
    return (
        <form className='w-full flex flex-col space-y-5'
            onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title'>Title</label>
                <input
                    defaultValue={car?.title}
                    type='text'
                    name='title'
                    placeholder='Enter Title'
                    {...register('title', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <textarea
                    defaultValue={car?.description}
                    type='text'
                    name='description'
                    placeholder='Enter description'
                    {...register('description', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='price'>Price pro day</label>
                <input
                    defaultValue={car?.price}
                    // defaultValue={50}
                    type='number'
                    name='price'
                    // placeholder='Enter price'
                    {...register('price', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='imageUrl'>Image URL</label>
                <input
                    defaultValue={car?.imageUrl}
                    type='text'
                    name='imageUrl'
                    placeholder='Enter Image URL'
                    {...register('imageUrl', { required: true })}
                />
            </div>
            <button type='submit' className='button'>
                Update
            </button>
        </form>
    )
}

export default EditCarForm