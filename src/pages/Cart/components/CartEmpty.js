import { Link } from 'react-router-dom';

export const CartEmpty = () => {
    return (
        <section className="relative p-0.5 my-10 mx-auto max-w-2xl text-center bg-gradient-to-tr from-pink-300 to-blue-300 rounded-lg shadow-lg2">
            <div className="p-7 bg-white rounded-md dark:bg-slate-800 dark:text-slate-100">
                <div className="items-center">
                    <p className="mb-4 text-9xl font-bold text-green-600 dark:text-green-400 bi bi-cart3"></p>
                    <p className="font-serif text-lg tracking-wide">Aargh! Your Cart Is Empty!</p>
                    <p className="font-serif tracking-wide">
                        Add items from our eBooks collection!
                    </p>
                </div>

                <div className="flex gap-x-6 justify-center items-center mt-4">
                    <Link
                        to="/products"
                        type="button"
                        className="py-1 px-2 mt-4 mb-2 text-center text-white bg-blue-500 rounded-lg border-2 border-blue-500 shadow-lg transition duration-300 ease-linear dark:text-white dark:bg-green-600 dark:border-green-500 dark:shadow-lg hover:bg-pink-700 hover:border-yellow-500 shadow-blue-500/50 dark:hover:text-green-700 dark:hover:bg-slate-100 dark:shadow-green-800/80 hover:text-slate-100"
                    >
                        <span className="mr-2 w-4 h-4 text-2xl">
                            <i className="bi bi-cart4"></i>
                        </span>
                        <span className="font-serif tracking-wide">Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
