import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';

import { useCart } from '../../context';
import { useTitle } from '../../hooks';

export const CartPage = () => {
    // const cartItemsLength = 1;
    const { cartList } = useCart();
    useTitle(`Cart (${cartList.length})`);

    return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
