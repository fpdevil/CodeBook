import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services';
import { useTitle } from '../hooks';

export const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const authDetails = {
                email: email.current.value,
                password: password.current.value
            };

            const data = await login(authDetails);
            data.accessToken
                ? navigate('/products')
                : toast.error(data, {
                    position: toast.POSITION.TOP_CENTER
                });
        } catch (err) {
            toast.error(err.message, {
                closeButton: true,
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }

    useTitle('Login');

    return (
        <main>
            <section className="dark:bg-slate-800">
                <div className="flex flex-col justify-center items-center py-8 px-6 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg border shadow-lg sm:max-w-md md:mt-0 xl:p-0 dark:border border-slate-100 dark:bg-slate-800 dark:border-slate-700 hover:shadow-indigo-500/40">
                        <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
                            <p className="text-2xl tracking-wide text-center underline md:text-2xl dark:text-white text-slate-900 underline-offset-8">
                                Login
                            </p>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium dark:text-white text-slate-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        ref={email}
                                        type="email"
                                        id="email"
                                        className="block p-2.5 w-full rounded-lg border sm:text-sm dark:text-white text-slate-900 bg-slate-50 border-slate-300 dark:placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-600 focus:border-primary-600"
                                        aria-placeholder="indiana.jones@mailx.com"
                                        required=""
                                        autoComplete="false"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium dark:text-white text-slate-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        ref={password}
                                        type="password"
                                        id="password"
                                        aria-placeholder="••••••••"
                                        className="block p-2.5 w-full rounded-lg border sm:text-sm dark:text-white text-slate-900 bg-slate-50 border-slate-300 dark:placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-600 focus:border-primary-600"
                                        required=""
                                        minLength="7"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="py-2.5 px-5 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 hover:text-orange-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    LogIn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
