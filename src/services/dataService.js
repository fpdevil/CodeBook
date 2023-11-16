import CodeError from './CodeError';

function getSession() {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const cbid = JSON.parse(sessionStorage.getItem('cbid'));
    const email = JSON.parse(sessionStorage.getItem('email'));

    return { token, cbid, email };
}

export async function getUser() {
    const session = getSession();
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`
        }
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${session.cbid}`, options);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    }
    const data = await response.json();

    return data;
}

export async function getUserOrders() {
    const session = getSession();
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.token}`
        }
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${session.cbid}`, options);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    }
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const session = getSession();
    const order_info = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };


    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(order_info)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, options);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    }
    const data = await response.json();

    return data;
}
