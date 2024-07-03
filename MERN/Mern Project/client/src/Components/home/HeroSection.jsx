import { useSelector } from "react-redux";
import BookingForm from "../forms/BookingForm";
import { selectCar } from "../../redux/slices/carSlice";
import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";




const HeroSection = () => {
    const car = useSelector(selectCar);
    const [bookingData, setBookingData] = useState({});
    const { data, error } = useSWR("/car", () => axios.get("/car").then((res) => res.data))

    let randomCar;

    if (data !== undefined && Object.keys(car).length === 0) {
        randomCar = data[Math.floor(Math.random() * data.length)];
    }

    if (data && Object.keys(car).length > 0) {
        randomCar = car;
    }

    useEffect(() => {
        if (randomCar !== undefined) {
            const getData = async () => {
                const { data, error } = await axios.get(`/bookings/${randomCar._id}`);
                setBookingData(data);
            };
            getData();
        }
    }, [randomCar]);

    // console.log(bookingData);

    return (

        <div className='h-screen w-screen relative bg-gradient-to-b from-slate-700 to-black'>
            {/* Background Image */}
            <img
                src={randomCar?.imageUrl}
                alt="Car"
                className='object-cover h-full w-full opacity-30 absolute z-0 '

            />

            {/* Content */}

            <div className='flex flex-col space-y-5 text-white -mt-40 z-10 absolute top-96 left-10 md:left-20'>

                <h1 className='text-3xl font-semibold'>{randomCar?.title}</h1>
                <p className='text-white font-light italic max-w-md text-xs md:text-sm'>
                    {randomCar?.description}
                </p>
            </div>

            {/* Services */}
            <div className='w-full flex flex-wrap items-center justify-center gap-10 absolute bottom-5 left-5 right-5 md:left-20 md:right-20 z-10'>
                <div className='px-3 py-2 rounded-xl border flex flex-col w-1/3 bg-opacity-75 bg-slate-800 text-white'>
                    <h3 className='text-xl font-bold break-all'>Retro D: Drive the Cars of Your Childhood Dreams</h3>
                    <p className='w-full italic text-[10px] md:text-sm'>
                        Remember those days playing racing games like Need for Speed and dreaming of driving exotic sports cars? Retro D, short for Retro Dream, makes those dreams come true by letting you drive the sports cars you once admired. Explore our exclusive selection of dream cars and experience the thrill of driving them on the roads of Tunisia. Whether for a special occasion or just for fun, Retro D brings your childhood fantasies to life on four wheels.
                    </p>
                </div>

                <div className='px-3 py-2 rounded-xl border flex flex-col w-1/3 bg-opacity-75 bg-slate-800 text-white'>
                    <h3 className='text-xl font-bold break-all'>Share Your Passion</h3>
                    <p className='w-full italic text-[10px] md:text-sm'>
                        For collectors of rare or sports cars, Retro D offers a unique platform to share your valuable collection while generating income. You can rent out your cars for special events such as weddings or ceremonies, giving other enthusiasts the opportunity to enjoy a unique moment with these automotive gems. This service not only allows you to showcase your collection to the public but also brings it to life and lets you profit by participating in memorable occasions.
                    </p>
                </div>

                <div className='px-3 py-2 rounded-xl border flex flex-col w-1/3 bg-opacity-75 bg-slate-800 text-white'>
                    <h3 className='text-xl font-bold break-all'>Roadmap</h3>
                    <p className='w-full italic text-[10px] md:text-sm'>
                        Retro D goes beyond urban roads, taking you to Tunisian race tracks for an unparalleled adrenaline rush. Rent race cars and, if desired, choose professional drivers to provide an exceptional driving experience. Whether you want to feel the excitement of high-speed racing or sharpen your driving skills in a controlled environment, our service guarantees thrilling sensations and an adrenaline boost on the country’s best circuits.
                    </p>
                </div>
            </div>
            <div className="hidden sm:flex flex-col space-y-5 text-white z-10 -mt-40 absolute top-96 right-10 md:right-20">
                <BookingForm car={randomCar} bookingData={bookingData} />

            </div>
        </div>

    );
};

export default HeroSection;
