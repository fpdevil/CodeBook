import { Link } from "react-router-dom";

export const OrderFail = () => {
    return (
        <section className="flex flex-col justify-center min-h-screen dark:bg-slate-800">
          <div className="py-4 px-6 bg-white ring-1 shadow-xl sm:px-10 sm:mx-auto sm:max-w-lg sm:rounded-lg ring-slate-800/5 dark:ring-slate-500 dark:bg-slate-800">
                <div className="mx-auto max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="my-2 mx-auto w-16 h-16 text-red-600 dark:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>

                    <div className="divide-y divide-gray-300/50">
                        <div className="py-4 space-y-4 text-base text-zinc-600 dark:text-zinc-200">
                            <h3 className="text-base font-semibold tracking-wide text-center md:text-xl">Payment Failed, Please try again!</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 fill-amber-100 stroke-red-600 dark:stroke-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <div className="ml-4">
                                        <p className="text-sm font-semibold tracking-wide text-pink-700 dark:text-red-400">Your order is not confirmed</p>
                                        <p className="text-sm font-semibold dark:text-zinc-300">Please contact <span className="underline hover:italic decoration-pink-500/30 underline-offset-2 hover:decoration-green-400/30">support@codebook.com</span> for further details.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                  <div className="justify-between pt-4 text-center border-t-2 border-slate-200 dark:border-slate-500">
                        <div className="flex gap-x-6 justify-center items-center mt-2">
                            <Link to="/cart" type="button" className="py-1 px-2 mt-2 mb-2 text-center text-white bg-blue-400 rounded-md border-2 border-blue-500 shadow-lg transition duration-300 ease-linear dark:text-white dark:bg-green-600 dark:border-green-500 dark:shadow-lg hover:border-pink-400 shadow-blue-500/50 dark:shadow-green-800/80 dark:hover:bg-slate-100 dark:hover:text-green-700 hover:bg-zinc-500 hover:text-slate-100">
                                <span className="mr-2 w-4 h-4 text-2xl">
                                    <i className="bi bi-cart4"></i>
                                </span>
                                <span className="font-serif text-lg">Checkout Again</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
