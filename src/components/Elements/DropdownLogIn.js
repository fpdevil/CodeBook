import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUser, logout } from '../../services';

export const DropdownLogIn = ({ setDropDown }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUserData() {
            try {
                const data = await getUser();
                data.email ? setUser(data) : handleLogout();
            } catch (err) {
                toast.error(err.message, {
                    closeButton: true,
                    closeOnClick: true,
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
        fetchUserData();
    }, []); //eslint-disable-line

    function handleLogout() {
        logout()
        setDropDown(false);
        navigate('/');
    }

    return (
        <div
            id="dropdownAvatar"
            className="overflow-auto absolute right-0 top-12 z-10 min-w-max font-serif text-sm bg-white rounded-md border-none divide-y divide-gray-100 shadow select-none dark:divide-gray-600 focus:ring-4 dark:text-slate-300 dark:bg-slate-700"
        >
            <div className="py-2 px-4 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
            >
                <li>
                    <Link
                        onClick={() => setDropDown(false)}
                        to="/products"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        All eBooks
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropDown(false)}
                        to="/dashboard"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="py-2">
                <span
                    onClick={handleLogout}
                    className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    Sign out
                </span>
            </div>
        </div>
    );
};
