import { Link } from 'react-router-dom';

export const DropdownLogOut = ({ setDropDown }) => {
    return (
        <div
            id="dropdownAvatar"
            className="overflow-auto absolute right-0 top-12 z-10 min-w-max font-serif text-sm bg-white rounded-md border-none divide-y divide-gray-100 shadow select-none dark:divide-gray-600 focus:ring-4 dark:bg-slate-700"
        >
            <ul className="text-slate-600 dark:text-slate-300">
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
                        to="/login"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropDown(false)}
                        to="/register"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    );
};
