import { Link } from "react-router-dom";
import { useTitle } from "../hooks";

export const PageNotFound = () => {
    useTitle('404 Not Found');

    return (
        <main>
            <section className="grid place-content-center px-4 h-screen dark:bg-slate-800">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-zinc-200 dark:text-slate-400">404</h1>

                    <div className="overflow-hidden relative m-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform dark:bg-gray-600 hover:-translate-y-2">
                        <img className="object-cover w-full h-80" src="https://cdn.pixabay.com/photo/2023/05/01/06/41/dog-7962236_1280.png" alt="Page Not Found" />
                        <div className="items-center m-4 text-center">
                          <p className="text-4xl font-bold tracking-wide text-rose-300 dark:text-rose-300">
                            Uh-oh!
                          </p>
                        </div>
                    </div>

                    <p className="mt-4 font-serif text-xl tracking-wide text-pink-600 dark:text-zinc-400">We can't find that page.</p>

                    <Link to="/">
                      <button type="button" className="inline-block py-3 px-5 mt-6 text-sm font-medium text-white bg-blue-500 rounded ring ring-blue-400 ring-offset-2 ring-offset-blue-100 transition duration-500 ease-in-out hover:text-amber-100 hover:bg-blue-600">
                        Go Back Home
                      </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};
