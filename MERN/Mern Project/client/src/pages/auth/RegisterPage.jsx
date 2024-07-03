// import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = async (formData) => {
    try {
      const { data } = await axios.post('http://localhost:5000/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (data) {
        navigate('/login');
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center relative bg-gray-700 text-white p-10 md:p-40'>
      <img
        src="https://i.pinimg.com/originals/1f/71/b5/1f71b51aa4fada3ea6d30e8ee4e49d5c.jpg"
        alt="Lambo"
        className='object-cover h-full w-full opacity-30 z-0 fixed object-center inset-0'
      />

      <form className='z-20 space-y-3' onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className='text-3xl'>Sign up to rent the Car of your dreams</h1>

        <input
          {...register("fullName", { required: true })}
          type="text"
          placeholder='Mohamed Aziz Berrais (first name + last name)'
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder='E-mail Address'
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder='Enter your password'
        />
        <Link to={"/login"} className='inline-flex'> Already have an account? Log in now!</Link>
        <button type='submit' className='button'>Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
