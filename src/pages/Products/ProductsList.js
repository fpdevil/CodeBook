import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ProductCard } from '../../components/';
import { FilterBar } from './components/FilterBar';

import { useFilter } from '../../context';
import { useTitle } from '../../hooks/useTitle';
import { getProductsList } from '../../services';
import { toast } from 'react-toastify';

export const ProductsList = () => {
    // from context provider
    const { products, updateProductList } = useFilter();

    const [show, setShow] = useState(false);
    // const [products, setProducts] = useState([]);

    // handling the search params
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get('q');

    useTitle('Explore eBooks Collection');


    // fetch all the products
    useEffect(() => {
        async function fetchProducts() {
            try {
            const data = await getProductsList(searchTerm);
            // setProducts(data);
                updateProductList(data);
            } catch (err) {
                toast.error(err.message, {
                    closeButton: true,
                    closeOnClick: true,
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
        fetchProducts();
    }, [searchTerm]); // eslint-disable-line

    return (
        <main>
            <section className="my-4">
                <div className="flex justify-between my-4">
                    <span className="mb-4 text-xl font-medium dark:text-slate-100">
                        All eBooks ({products.length})
                    </span>
                    <span>
                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="inline-flex items-center p-2 text-sm font-medium text-center bg-gray-100 rounded-lg dark:bg-gray-600 hover:bg-gray-200 text-slate-900 dark:text-slate-100 dark:text-whit dark:hover:bg-gray-700"
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                            </svg>
                        </button>
                    </span>
                </div>
                <div className="flex flex-wrap justify-center lg:flex-row">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {show && <FilterBar setShow={setShow} />}
        </main>
    );
};
