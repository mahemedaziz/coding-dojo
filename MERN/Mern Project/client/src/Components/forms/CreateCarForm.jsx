import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { closeModal } from '../../redux/slices/uiSlice'
import { toast } from 'react-hot-toast'
import { mutate } from 'swr'


const CreateCarForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (form) => {
        try {
            const { data } = await axios.post('/car', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch(closeModal());
            toast.success('Car created successfully');
            reset();

            // Rafraîchir les données SWR pour /user-cars après la création
            mutate('/user-cars');

        } catch (error) {
            console.error('Error creating car:', error);
            toast.error('Failed to create car');
        }
    };
    return (
        <form className='w-full flex flex-col space-y-5'
            onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    name='title'
                    placeholder='Enter Title'
                    {...register('title', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <textarea
                    type='text'
                    name='description'
                    placeholder='Enter description'
                    {...register('description', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='price'>Price pro day</label>
                <input
                    defaultValue={50}
                    type='number'
                    name='price'
                    // placeholder='Enter price'
                    {...register('price', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='imageUrl'>Image URL</label>
                <input
                    type='text'
                    name='imageUrl'
                    placeholder='Enter Image URL'
                    {...register('imageUrl', { required: true })}
                />
            </div>
            <button type='submit' className='button'>
                Create
            </button>
        </form>
    )
}

export default CreateCarForm