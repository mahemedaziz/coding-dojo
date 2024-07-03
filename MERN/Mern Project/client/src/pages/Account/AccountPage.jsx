import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser, selectIsLoggedIn } from '../../redux/slices/userSlice';
import NavLinks from '../../Components/accounts/NavLinks';
import AccountParts from './AccountParts';

const AccountPage = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    // Attendez que l'authentification soit vérifiée
    if (typeof isLoggedIn === 'undefined') {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="px-10 py-20 md:p-40 space-y-10">
            <NavLinks />
            <AccountParts />
        </div>
    );
};

export default AccountPage;
