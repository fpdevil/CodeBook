import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useTitle } from "../../hooks";

export const OrderPage = () => {
    useTitle('Order Summary');

    const { state } = useLocation();
    // const status = true;
    // const data = {
    //     'user': {
    //         'name': 'sampath',
    //         'email': 'sampath.singamsetty@gmail.com'
    //     },
    //     'id': '1234567890'
    // };

    return (
        <main>
            {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
        </main>
    );
};
