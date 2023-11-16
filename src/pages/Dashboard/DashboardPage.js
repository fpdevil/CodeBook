import { useEffect, useState } from "react";
import { useTitle } from "../../hooks";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { toast } from "react-toastify";

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);

    useTitle('Dashboard');

    useEffect(() => {
        async function fetchOrders() {
            try {
            const data = await getUserOrders();
                setOrders(data);
            } catch (err) {
                toast.error(err.message, {
                    closeOnClick: true,
                    closeButton: true,
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
        fetchOrders();
    }, []);

    return (
        <main>
            <section>
                <p className="my-10 text-2xl font-semibold text-center underline underline-offset-8 dark:text-slate-200">My Orders Dashboard</p>
            </section>

            <section>
                {
                    orders.length && orders.map((order) => (
                        <DashboardCard key={order.id} order={order} />
                    ))
                }
            </section>

            <section>
                {
                    !orders.length && <DashboardEmpty />
                }
            </section>
        </main>
    );
};
