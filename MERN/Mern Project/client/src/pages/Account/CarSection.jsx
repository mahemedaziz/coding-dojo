import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import { openModal, setType } from '../../redux/slices/uiSlice';
import useSWR from 'swr';
import axios from 'axios';
import { selectUserCars, setCar, setUserCars } from '../../redux/slices/carSlice';
import { toast } from 'react-hot-toast';

const CarSection = () => {
    const dispatch = useDispatch();
    const userCars = useSelector(selectUserCars);

    const { data, error, mutate } = useSWR("/user-cars", () => axios.get("/user-cars").then((res) => {
        dispatch(setUserCars(res.data));
        return res.data;
    }));

    const handleEditCar = (car) => {
        dispatch(setCar(car));
        dispatch(setType('edit')); // Définir le type à 'edit' pour l'édition
        dispatch(openModal());
    };

    const handleAddCar = () => {
        dispatch(setType('add')); // Définir le type à 'add' pour l'ajout
        dispatch(openModal());
    };

    const handleDeleteCar = async (carId) => {
        try {
            await axios.delete(`/car/${carId}`);
            mutate(); // Rafraîchir les données SWR après la suppression
            toast.success('Car deleted successfully');
        } catch (error) {
            console.error('Error deleting car:', error);
            toast.error('Failed to delete car');
        }
    };

    return (
        <div className='space-y-10'>
            <div className='flex items-center justify-between'>
                <h3 className='text-3xl font-semibold'> Your Cars</h3>
                <button onClick={handleAddCar} className='button w-fit'>
                    <AiOutlinePlus className='h-5 w-5' />
                </button>
            </div>
            <div className='flex flex-col space-y-5'>
                {userCars?.map((car) => (
                    <div key={car._id} className='w-full flex items-center justify-between'>
                        <img src={car.imageUrl} className='w-14 h-14 object-cover rounded-xl' alt='' />
                        <div className='flex flex-col'>
                            <h3 className='text-sm font-semibold'>{car.title}</h3>
                            <p className='text-xs font-extralight italic'> Your offer is {car.price} DT per day</p>
                        </div>
                        <div className='space-x-3'>
                            <button onClick={() => handleEditCar(car)}>
                                <AiOutlineEdit className='h-5 w-5' />
                            </button>
                            <button onClick={() => handleDeleteCar(car._id)}>
                                <AiOutlineDelete className='h-5 w-5' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarSection;
