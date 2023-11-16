import { useEffect, useState } from 'react';
import { ProductCard, Spinner } from '../../../components/';
import { getFeaturedProductsList } from '../../../services';


export const FeaturedProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const data = await getFeaturedProductsList();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching product');
                setProducts([]);
            }
            setLoading(false);
        }
        fetchProducts();
    }, []);

    return (
        <section className="my-12">
            <h1 className="mb-6 text-2xl font-medium text-center underline underline-offset-8 text-slate-500 dark:text-slate-100">
                Featured eBooks
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-wrap justify-center lg:flex-row min-h-[100vh]">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};
