import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        // Hero Section
        <section className="relative py-4 bg-white lg:py-4 dark:bg-gray-800">
            <div className="flex flex-col mx-auto w-full lg:flex-row lg:gap-12 lg:px-4">
                <div className="flex relative flex-col items-center mx-auto max-w-2xl lg:flex-1 lg:items-start lg:mx-0 lg:w-1/2 lg:max-w-none lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:py-12 md:text-5xl xl:text-6xl text-slate-600 dark:text-slate-300">
                        The Ultimate eBook Store
                    </h1>
                    <p className="text-xl text-justify text-slate-500 dark:text-slate-400">
                        CodeBook is the world's most popular and authoritative source for computer
                        science ebooks. Find ratings and access to the newest books digitally.
                    </p>
                    <Link
                        to="/products"
                        type="button"
                        className="py-2 px-4 mt-8 text-white bg-blue-700 rounded-lg border-yellow-100 hover:text-yellow-100 hover:bg-blue-800 hover:shadow-lg"
                    >
                        Explore eBooks
                    </Link>
                </div>
                <div className="flex relative flex-1 my-4 mx-auto max-w-3xl lg:max-w-xl">
                    <img
                        alt="CodeBook Hero Section"
                        src="https://source.unsplash.com/FHnnjk1Yj7Y"
                        className="object-cover max-h-full rounded-lg lg:h-fit"
                    />
                </div>
            </div>
        </section>
    );
};
