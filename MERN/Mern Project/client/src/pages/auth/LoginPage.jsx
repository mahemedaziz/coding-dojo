import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';



const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const onSubmitHandler = async (formData) => {
    try {
      // Appel à l'API de connexion
      const { data } = await axios.post('http://localhost:5000/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (data) {
        toast.success('Login successful!');
        dispatch(setUser(data));
        setRedirect(true);
      }
    } catch (error) {
      toast.error('Email address or password is incorrect!');
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center relative bg-gray-700 text-white p-10 md:p-40'>
      <img
        src="https://i.pinimg.com/originals/1f/71/b5/1f71b51aa4fada3ea6d30e8ee4e49d5c.jpg"
        alt="Lambo"
        className='object-cover h-full w-full opacity-30 z-0 fixed object-center inset-0'
      />

      <form className='z-20 space-y-3' onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className='text-3xl'>Login to rent the Car of your dreams</h1>

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
        <Link to={"/register"} className='inline-flex'>Dont have an account? Join now!</Link>
        <button type='submit' className='button'>Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
