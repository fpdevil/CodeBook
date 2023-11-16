import { useFilter } from '../../../context';

export const FilterBar = ({ setShow }) => {
    const { state, dispatch } = useFilter();

    return (
        <section className="filter">
            <div className="overflow-y-auto fixed top-0 left-0 z-40 p-4 w-72 h-screen bg-gray-100 min-w-fit dark:bg-slate-900">
                <h2 className="mx-2 font-serif text-xl font-medium tracking-widest text-slate-500 dark:text-slate-200">
                    Filters
                </h2>
                <button
                    onClick={() => setShow(false)}
                    type="button"
                    aria-label="Dismiss"
                    className="inline-flex absolute top-4 right-6 items-center p-1 text-lg font-bold text-gray-400 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close Filters</span>
                </button>
                <div className="py-2 border-b-2"></div>
                <div className="py-4 mx-2">
                    <ul className="text-slate-500 dark:bg-slate-900">
                        <li>
                            <h2 className="font-serif text-xl font-medium tracking-wide dark:text-slate-200">
                                Sort By
                            </h2>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-violet-500 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-violet-500">
                                <input
                                    onChange={() => {
                                        dispatch({
                                            type: 'SORT_BY',
                                            payload: { sortBy: 'low_to_high' },
                                        });
                                    }}
                                    checked={state.sortBy === 'low_to_high' || false}
                                    type="radio"
                                    name="price-sorter"
                                    id="price-sort-lh"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                    value=""
                                />
                                <label htmlFor="price-sort-lh" className="ml-2 tracking-wide">
                                    Price - Low to High
                                </label>
                            </div>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-violet-500 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-violet-500">
                                <input
                                    onChange={() => {
                                        dispatch({
                                            type: 'SORT_BY',
                                            payload: { sortBy: 'high_to_low' },
                                        });
                                    }}
                                    checked={state.sortBy === 'high_to_low' || false}
                                    type="radio"
                                    name="price-sorter"
                                    id="price-sort-hl"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                    value=""
                                />
                                <label htmlFor="price-sort-hl" className="ml-2 tracking-wide">
                                    Price - High to Low
                                </label>
                            </div>
                        </li>

                        <li>
                            <h2 className="font-serif text-xl font-medium tracking-wide dark:text-slate-200">
                                Rating
                            </h2>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-pink-800 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-pink-800">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '4STARS_AND_ABOVE' },
                                        })
                                    }
                                    checked={state.ratings === '4STARS_AND_ABOVE' || false}
                                    type="radio"
                                    name="star-rating"
                                    id="four-stars"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                />
                                <label htmlFor="four-stars" className="ml-2 tracking-wide">
                                    4 Stars & Above
                                </label>
                            </div>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-pink-700 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-pink-700">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '3STARS_AND_ABOVE' },
                                        })
                                    }
                                    checked={state.ratings === '3STARS_AND_ABOVE' || false}
                                    type="radio"
                                    name="star-rating"
                                    id="three-stars"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                />
                                <label htmlFor="three-stars" className="ml-2 tracking-wide">
                                    3 Stars & Above
                                </label>
                            </div>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-pink-600 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-pink-600">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '2STARS_AND_ABOVE' },
                                        })
                                    }
                                    checked={state.ratings === '2STARS_AND_ABOVE' || false}
                                    type="radio"
                                    name="star-rating"
                                    id="two-stars"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                />
                                <label htmlFor="two-stars" className="ml-2 tracking-wide">
                                    2 Stars & Above
                                </label>
                            </div>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-amber-100 hover:bg-pink-500 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-amber-100 dark:hover:bg-pink-500">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '1STARS_AND_ABOVE' },
                                        })
                                    }
                                    checked={state.ratings === '1STARS_AND_ABOVE' || false}
                                    type="radio"
                                    name="star-rating"
                                    id="one-stars"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                />
                                <label htmlFor="one-stars" className="ml-2 tracking-wide">
                                    1 Stars & Above
                                </label>
                            </div>
                        </li>

                        <li>
                            <h2 className="font-serif text-xl font-medium tracking-wide dark:text-slate-200">
                                Other Filters
                            </h2>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-yellow-200 hover:bg-lime-700 bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-900 dark:hover:text-yellow-200 dark:hover:bg-lime-700">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'BEST_SELLER_ONLY',
                                            payload: { bestSellerOnly: !state.bestSellerOnly },
                                        })
                                    }
                                    checked={state.bestSellerOnly || false}
                                    type="checkbox"
                                    name="only-items"
                                    id="best-sellers"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                    value=""
                                />
                                <label htmlFor="best-sellers" className="ml-2 tracking-wide">
                                    Best Sellers
                                </label>
                            </div>
                            <div className="flex py-2 px-2 my-2 text-sm font-medium rounded-lg transition duration-200 hover:text-yellow-200 hover:bg-lime-700 bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-lime-700 dark:hover:text-yellow-200">
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'INSTOCK_ONLY',
                                            payload: { inStockOnly: !state.inStockOnly },
                                        })
                                    }
                                    checked={state.inStockOnly || false}
                                    type="checkbox"
                                    name="only-items"
                                    id="instock-items"
                                    className="float-left relative mt-1 mr-2 w-4 h-4 rounded-full border-2 border-solid cursor-pointer"
                                    value=""
                                />
                                <label htmlFor="instock-items" className="ml-2 tracking-wide">
                                    Only InStock
                                </label>
                            </div>
                        </li>

                        <li className="my-4 ml-3">
                            <button
                                onClick={() => dispatch({ type: 'CLEAR_FILTER' })}
                                type="button"
                                className="py-2 px-20 font-serif text-sm font-semibold tracking-wider rounded-md border transition duration-200 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-amber-100 dark:focus:ring-gray-700 dark:bg-slate-900 dark:text-slate-100 hover:text-slate-100"
                            >
                                Clear All
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
