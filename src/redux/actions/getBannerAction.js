import { db } from '../../firebase';
import { collection, getDocs } from "@firebase/firestore";


const fetchBannerRequest = () => {
    return {
        type: "FETCH_BANNER_REQUEST",
    }
}

const fetchBannerSuccess = (banner) => {
    return {
        type: "FETCH_BANNER_SUCCESS",
        payload: banner,
    }
}

export const getBanners = () => async (dispatch) => {
    dispatch(fetchBannerRequest())
    const bannerCollectionRef = collection(db, "banners");
    const data = await getDocs(bannerCollectionRef);
    dispatch(fetchBannerSuccess(data.docs.map((doc) => ({...doc.data()}))))
}