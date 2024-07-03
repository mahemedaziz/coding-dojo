import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../src/redux/slices/userSlice";
import AccountPage from "./pages/Account/AccountPage";


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get('/profile');
        dispatch(setUser(data));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const user = localStorage.getItem('user');
    if (!user) {
      fetchUser();
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
      </Route>
    </Routes>
  );
}

export default App;
