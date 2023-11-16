import { useCart } from '../../context';
import { WishlistEmpty } from './components/WishlistEmpty';

export const WishlistPage = () => {
    const { cartList } = useCart();

    return <main>{cartList.length ? <WishlistEmpty /> : <WishlistEmpty />}</main>;
};
