import { Link } from "react-router-dom";

export const OrderSuccess = ({ data }) => {
    return (
        <section className="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen sm:py-12 dark:bg-slate-800">
            <div className="relative px-6 pt-4 pb-4 bg-white ring-1 shadow-xl sm:px-10 sm:mx-auto sm:max-w-lg sm:rounded-lg ring-slate-800/5 dark:bg-slate-800 dark:ring-slate-500">
                <div className="mx-auto max-w-md">
                    <svg viewBox="0 0 24 24" className="my-2 mx-auto w-16 h-16 fill-green-600 dark:fill-green-500">
                        <path fill="" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                    </svg>
                    <div className="divide-y divide-slate-300/50">
                        <div className="py-4 space-y-6 text-base text-slate-600">
                            <h3 className="text-base font-semibold text-center md:text-2xl text-zinc-500 dark:text-zinc-200">Payment Done!</h3>
                            <p className="my-2 text-center text-zinc-600 dark:text-zinc-200">Thank you {data.user.name} for your order</p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg className="flex-none w-6 h-6 stroke-2 fill-green-100 stroke-green-500" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="11" />
                                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                    </svg>
                                    <p className="ml-6 dark:text-zinc-200">
                                        Your Order Id is
                                        <code className="ml-1 text-sm font-bold text-zinc-600 dark:text-slate-200">{data.id}</code>
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <svg className="flex-none w-6 h-6 stroke-2 fill-amber-100 stroke-amber-500" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="11" />
                                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                    </svg>
                                    <p className="ml-6 dark:text-zinc-200">
                                        An order confirmation email will be sent to
                                        <code className="ml-1 text-sm font-bold text-zinc-600 dark:text-zinc-200">{data.user.email}</code>
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <svg className="flex-none w-6 h-6 stroke-2 fill-sky-100 stroke-sky-500" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="11" />
                                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                    </svg>
                                    <p className="ml-6 dark:text-slate-300">Payment Transaction Id: <code className="ml-1 text-sm font-bold text-zinc-600 dark:text-zinc-200">ABCD1111_XYF016</code></p>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-2 text-center">
                            <div className="flex gap-x-6 justify-center items-center mt-2">
                                <Link to="/products" type="button" className="py-1 px-2 mt-4 mb-2 text-center text-white bg-blue-400 rounded-md border-2 border-blue-500 shadow-lg transition duration-300 ease-linear dark:text-white dark:bg-green-600 dark:border-green-500 dark:shadow-lg hover:border-pink-400 shadow-blue-500/50 dark:shadow-green-800/80 dark:hover:bg-slate-100 dark:hover:text-green-700 hover:bg-zinc-500 hover:text-slate-100">
                                    <span className="mr-2 w-4 h-4 text-2xl">
                                        <i className="bi bi-cart4"></i>
                                    </span>
                                    <span className="font-serif text-lg">Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
