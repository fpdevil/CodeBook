import CodeError from './CodeError';

export async function login(authDetails) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(authDetails)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, options);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // };
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
        sessionStorage.setItem('email', JSON.stringify(data.user.email));
    }

    return data;
}

export async function register(authDetail) {
    // options for POST call
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(authDetail)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, options);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // };
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
        sessionStorage.setItem('email', JSON.stringify(data.user.email));
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
    sessionStorage.removeItem('email');
}
