import { useEffect, useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";
import { createOrder, getUser } from "../../../services";
import { toast } from "react-toastify";

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
        decimals,
    );
}

/**
 * cc_format function renders the input credit card number
 * into a standard card number format delimited with -
 * @param {string} value
 * @returns {s}
 */
function cc_format(value) {
    const v = value
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
        parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join("-") : value;
}

// eslint-disable-next-line
function dd_format(value) {
    let formattedStr = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, " $1 / $2")
        .replace(/(\d{2})\d+?$/, "$1");
    const maskedStateStr = formattedStr.split(" ");
    const charLength = 8;
    const arrLength = 4;

    if (
        maskedStateStr.length === arrLength &&
        formattedStr.length === charLength
    ) {
        maskedStateStr.shift();
        let day = maskedStateStr[0];
        let year = maskedStateStr[2];
        return `${day} / ${year}`;
    } else {
        return value;
    }
}

export const CartCheckout = ({ setCheckout }) => {
    // call the context for global cart state to fetch price
    const { cartList, total, clearCart } = useCart();

    // set user information
    const [user, setUser] = useState({});

    // handle navigation post payment completion
    const navigate = useNavigate();

    // state information for handling credit card input
    const [val, setVal] = useState("");
    const onNumberChange = (e) => {
        setVal(e.target.value);
    };

    // state information for handling credit card expiry
    // eslint-disable-next-line
    const [exp, setExp] = useState(null);
    // eslint-disable-next-line
    const onExpChange = (e) => {
        setExp(e.target.value);
    };

    // fetch the token details
    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err) {
                toast.error(err.message, {
                    closeButton: true,
                    closeOnClick: true,
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }

        fetchUser();
    }, []);

    // handling of the order submission on button click
    async function handleOrderSubmit(event) {
        event.preventDefault();

        try {
            const data = await createOrder(cartList, total, user);
            // clear the cart of all items if payment went through
            clearCart();
            // navigation post payment
            navigate("/order-summary", { state: { data: data, status: true } });
        } catch (err) {
            toast.error(err.message, {
                closeOnClick: true,
                closeButton: true,
                position: toast.POSITION.BOTTOM_CENTER
            });
            navigate('/order-summary', { state: { status: false } });
        };
    }

    return (
        <section className="p-4 min-h-screen antialiased">
            <div className="fixed top-0 left-0 w-full h-full">
                {/* Payment Component */}
                <div>
                    {/* Card body */}
                    <div className="relative px-4 pb-8 mx-auto max-w-lg sm:px-6 lg:px-8">
                        <div className="px-8 pb-6 bg-white rounded-b shadow-lg">
                            <button
                                onClick={() => setCheckout(false)}
                                className="inline-flex absolute top-2 right-10 items-center ml-auto text-sm bg-transparent rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200"
                                data-modal-toggle="authentication-modal"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>

                            {/* Card header */}
                            <div className="flex flex-col mb-6 text-center">
                                <h3 className="pt-8 m-2 text-xl font-semibold leading-snug text-slate-500">
                                    <i className="mr-2 font-bold text-blue-600 bi bi-credit-card-2-front"></i>
                                    CARD PAYMENT
                                </h3>
                                <div className="mt-2 font-serif text-sm">
                                    CodeBook: The Ultimate eBook Store online.
                                </div>
                            </div>

                            {/* Card form */}
                            <form onSubmit={handleOrderSubmit}>
                                <div className="space-y-4">
                                    {/* Card Number */}
                                    <div className="flex-shrink-0">
                                        <label
                                            className="block mb-1 text-sm font-medium"
                                            htmlFor="card-nr"
                                        >
                                            Card Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="justify-center items-center py-2 px-3 w-full text-sm tracking-widest leading-5 bg-white rounded border shadow-md hover:border-violet-300 focus:border-indigo-300 focus:ring-0 placeholder-slate-400 text-slate-800 border-slate-200"
                                            id="card-nr"
                                            maxLength="19"
                                            placeholder="9999-9999-9999-9999"
                                            value={cc_format(val)}
                                            type="text"
                                            onChange={onNumberChange}
                                            title="16-digit credit card number"
                                        /* pattern="[0-9]{16,19}" */
                                        />
                                    </div>
                                    {/* Expiry and CVC */}
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <label
                                                className="block mb-1 text-sm font-medium"
                                                htmlFor="card-expiry"
                                            >
                                                Expiration Date <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-expiry"
                                                className="py-2 px-3 w-full text-sm tracking-wide leading-5 bg-white rounded border shadow-sm hover:border-violet-300 focus:border-indigo-300 focus:ring-0 placeholder-slate-400 text-slate-800 border-slate-200"

                                                maxLength="9"
                                                placeholder="MM / YY"
                                                type="text"
                                                /* onChange={onExpChange} */
                                                /* value={dd_format(exp)} */
                                                title="2-digit month and 2-digit year greater than 11/23"
                                                pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                className="block mb-1 text-sm font-medium"
                                                htmlFor="card-cvc"
                                            >
                                                CVC <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-cvc"
                                                className="py-2 px-3 w-full text-sm leading-5 bg-white rounded border shadow-sm hover:border-violet-300 focus:border-indigo-300 focus:ring-0 placeholder-slate-400 text-slate-800 border-slate-200"
                                                type="text"
                                                pattern="\d{3}"
                                                placeholder="CVC"
                                                maxLength="3"
                                            />
                                        </div>
                                    </div>
                                    {/* Name on Card */}
                                    <div>
                                        <label
                                            className="block mb-1 text-sm font-medium"
                                            htmlFor="card-name"
                                        >
                                            Name on Card <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="card-name"
                                            id="card-name"
                                            className="py-2 px-3 w-full text-sm leading-5 bg-white rounded border shadow-sm hover:border-violet-300 focus:border-indigo-300 focus:ring-0 placeholder-slate-400 text-slate-800 border-slate-200"
                                            type="text"
                                            value={user.name || "undefined"}
                                            disabled
                                            required=""
                                        />
                                    </div>
                                    {/* Email on Card */}
                                    <div>
                                        <label
                                            className="block mb-1 text-sm font-medium"
                                            htmlFor="card-email"
                                        >
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="card-email"
                                            id="card-email"
                                            className="py-2 px-3 w-full text-sm leading-5 bg-white rounded border shadow-sm hover:border-violet-300 focus:border-indigo-300 focus:ring-0 placeholder-slate-400 text-slate-800 border-slate-200"
                                            type="email"
                                            value={user.email || "yourname@mailprovider.com"}
                                            disabled
                                            required=""
                                        />
                                    </div>
                                </div>
                                {/* Form footer */}
                                <div className="mt-6">
                                    <div className="mb-4 text-2xl font-semibold text-center text-pink-600">
                                        <span className="font-serif">$</span>
                                        {round(total, 2)}
                                    </div>
                                    <div className="mb-4">
                                        <button className="inline-flex justify-center items-center py-2 px-3 w-full text-sm font-medium leading-5 text-white bg-indigo-500 rounded border border-transparent shadow-sm transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus-visible:ring-2">
                                            <span className="mr-2 text-2xl hover:text-amber-200">
                                                <AiFillUnlock />
                                            </span>{" "}
                                            PAY NOW
                                        </button>
                                    </div>
                                    <div className="text-xs italic text-center text-slate-500">
                                        Your card will be charged ${round(total, 2)}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
