import { Link } from "react-router-dom";

export const DashboardCard = ({ order }) => {
    return (
        <div className="py-4 px-6 mx-auto mt-2 max-w-lg bg-white rounded-md border ring-1 shadow-xl ring-slate-900/5 dark:bg-slate-800 dark:border-slate-500">
            <div className="mx-auto max-w-md">
                <div className="flex justify-between py-4">
                    <div className="flex flex-row">
                        <span className="font-semibold text-zinc-600 dark:text-zinc-200">Order Id:</span>
                        <span className="ml-2 text-lg font-semibold text-green-600 dark:text-green-400">{order.id}</span>
                    </div>
                    <div className="flex flex-row">
                        <span className="font-semibold text-zinc-600 dark:text-zinc-200">Total:</span>
                        <span className="ml-2 font-serif font-semibold text-green-600 dark:text-green-400">${order.amount_paid}</span>
                    </div>
                </div>

                {
                    order.cartList.map((product) => (
                        <div key={product.id} className="justify-evenly py-4 text-center border-t-2 border-b-2 border-slate-200 dark:border-slate-500">
                            <div className="flex gap-x-6 items-center mt-2">
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.poster} alt={product.name} className="w-32 rounded" />
                                </Link>
                                <div className="flex flex-col space-y-2">
                                    <Link to={`/products/${product.id}`} className="mx-2 dark:text-zinc-200">
                                        <p className="text-lg text-left">{product.name}</p>
                                    </Link>
                                    <div className="dark:text-zinc-200">
                                        <p className="mx-2 font-serif text-xl text-left">${product.reduced_price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};
