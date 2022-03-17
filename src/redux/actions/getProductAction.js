import { db } from '../../firebase';
import { collection, getDocs } from "@firebase/firestore";

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST",
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products,
    }
}

// const fetchProductsError = () => {
//     return {
//         type: "FETCH_PRODUCTS_ERROR",
//     }
// }

export const getProducts = () => async (dispatch) => {
    dispatch(fetchProductsRequest())
    const productCollectionRef = collection(db, "products");
    const data = await getDocs(productCollectionRef);
    dispatch(fetchProductsSuccess(data.docs.map((doc) => ({...doc.data()}))))
}
