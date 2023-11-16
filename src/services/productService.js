import CodeError from "./CodeError";

export async function getProductsList(searchTerm) {
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ''}`,
    );
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    };
    const data = await response.json();
    return data;
}

export async function getProduct(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    };
    const data = await response.json();
    return data;
}

export async function getFeaturedProductsList() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/feautured_products`);
    if (!response.ok) {
        throw new CodeError(response.statusText, response.status);
        // throw {
        //     status: response.status,
        //     message: response.statusText
        // }
    };
    const data = await response.json();
    return data
}
