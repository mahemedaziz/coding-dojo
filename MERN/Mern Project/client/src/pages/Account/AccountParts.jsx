import { useParams } from 'react-router-dom'
import ProfileSection from './ProfileSection';
import BookingSection from './BookingSection';
import CarSection from './CarSection';

const AccountParts = () => {
    const { subpage } = useParams();



    return (
        <div>
            {subpage === "profile" ? (
                <ProfileSection />
            ) : subpage === "reservations" ? (
                <BookingSection />

            ) : subpage === "cars" ? (
                <CarSection />
            ) : (
                <ProfileSection />
            )}
        </div>
    )
}

export default AccountParts