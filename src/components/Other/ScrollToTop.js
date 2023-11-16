import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Now create a custom hook that uses both useLocation and useEffect
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // scroll to the top of the browser window when changing route
        // the window object is a normal DOM object and is safe to use in React.
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
