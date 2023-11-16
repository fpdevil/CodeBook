import { Route, Routes } from "react-router-dom";

import {
    HomePage,
    ProductsList,
    ProductDetails,
    Register,
    Login,
    CartPage,
    WishlistPage,
    OrderPage,
    DashboardPage,
    PageNotFound,
} from "../pages";

import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="products" element={<ProductsList />} />
                <Route path="products/:id" element={<ProductDetails />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route
                    path="cart"
                    element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="order-summary"
                    element={
                        <ProtectedRoute>
                            <OrderPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
