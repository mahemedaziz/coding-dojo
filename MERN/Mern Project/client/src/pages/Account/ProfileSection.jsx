
import { useDispatch, useSelector } from "react-redux";
import { selectUser, } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearUser } from "../../redux/slices/userSlice";

const ProfileSection = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await axios.post("/logout", {}, { withCredentials: true });
            dispatch(clearUser());
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="flex flex-col space-y-3">
            <p>Welcome {user?.fullName}</p>
            <p>You can view your uploaded cars, your bookings and your profile</p>
            <p>Thank you for honoring your commitments on our site. We are in the midst of expansion and aim to continuously enhance our services. For any feedback or complaints, please email us at RetroD@outlook.com. Thank you!</p>
            <button onClick={logoutHandler} className="button bg-red-500 w-fit">Logout</button>
        </div>
    );
};

export default ProfileSection;
