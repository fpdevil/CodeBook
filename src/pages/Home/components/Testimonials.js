import { TestimonialCard } from '../../../components/Elements/TestimonialCard';

export const Testimonials = () => {
    return (
        <section className="my-4 rounded-md border shadow-sm dark:bg-gray-800 dark:border-slate-600">
            <h1 className="py-8 text-2xl font-medium text-center underline underline-offset-8 text-slate-500 dark:text-slate-100">
                Testimonials About CodeBook
            </h1>
            <TestimonialCard />
        </section>
    );
};
