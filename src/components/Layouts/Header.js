import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useCart } from '../../context';

import { Search } from '../Sections/Search';
import { DropdownLogOut, DropdownLogIn } from '../index';

import Logo from '../../assets/images/Logo.png';

export const Header = () => {
    // global cart state through cart context
    const { cartList } = useCart();

    // switching between dark and light
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

    // show or hide the search selection
    const [showSearch, setShowSearch] = useState(false);

    // show or hide drop down menu
    const [dropDown, setDropDown] = useState(false);

    // get the token from session storage
    const token = JSON.parse(sessionStorage.getItem('token'));

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header>
            {/* component */}
            <nav className="bg-white dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center py-4 px-4 mx-auto max-w-screen-xl border-b-2 border-solid dark:border-b-0 border-slate-200 border-rounded">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="mr-2 h-6 md:h-8" alt="CodeBook Logo" />
                        <span className="self-center text-2xl font-medium whitespace-nowrap text-slate-600 dark:text-slate-300">
                            CodeBook
                        </span>
                    </Link>
                  <div className="flex relative gap-2 items-center md:gap-4">
                        <span
                          className="text-xl cursor-pointer md:text-2xl text-slate-600 bi bi-gear-wide-connected dark:text-slate-300"
                            onClick={() => setDarkMode(!darkMode)}
                        ></span>
                        <span
                            className="text-xl cursor-pointer text-slate-600 bi bi-search dark:text-slate-300"
                            onClick={() => setShowSearch(!showSearch)}
                        ></span>

                        <Link to="/wishlist" className="text-slate-600 dark:text-slate-300">
                            <div className="relative">
                                <i className="text-xl md:text-2xl bi bi-bag-heart"></i>
                            </div>
                        </Link>

                        {/* <Link to="/cart" className="text-slate-600 dark:text-slate-300"> */}
                        {/*     <span className="relative text-2xl bi bi-cart3"> */}
                        {/*         <span className="absolute left-2 -top-2.5 px-1 text-xs font-medium text-center bg-pink-600 rounded-full text-slate-100 border-1"> */}
                        {/*             {cartList.length} */}
                        {/*         </span> */}
                        {/*     </span> */}
                        {/* </Link> */}

                        <NavLink to="/cart" className="text-slate-600 dark:text-slate-300">
                            <div className="relative">
                                <i className="text-xl md:text-2xl bi bi-cart3"></i>
                                {cartList.length > 0 && (
                                    <span className="flex absolute -top-1 -right-2 justify-center items-center w-5 h-4 text-xs text-white bg-pink-600 rounded-full animate-bounce">
                                        {cartList.length}
                                    </span>
                                )}
                            </div>
                        </NavLink>

                        <span
                            onClick={() => setDropDown(!dropDown)}
                            className="text-xl cursor-pointer md:text-2xl text-slate-600 bi bi-person-circle dark:text-slate-300"
                        ></span>
                        {dropDown &&
                            (token ? (
                                <DropdownLogIn setDropDown={setDropDown} />
                            ) : (
                                <DropdownLogOut setDropDown={setDropDown} />
                            ))}
                    </div>
                </div>
            </nav>

            {showSearch && <Search setShowSearch={setShowSearch} />}
        </header>
    );
};
