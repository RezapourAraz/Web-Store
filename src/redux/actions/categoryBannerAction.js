import { db } from '../../firebase';
import { collection, getDocs } from "@firebase/firestore";


const fetchBannerRequest = () => {
    return {
        type: "FETCH_CATE_BANNER_REQUEST",
    }
}

const fetchBannerSuccess = (categoryBanner) => {
    return {
        type: "FETCH_CATE_BANNER_SUCCESS",
        payload: categoryBanner,
    }
}
 
export const getCategoryBanners = () => async (dispatch) => {
    dispatch(fetchBannerRequest())
    const bannerCollectionRef = collection(db, "category-banners");
    const data = await getDocs(bannerCollectionRef);
    dispatch(fetchBannerSuccess(data.docs.map((doc) => ({...doc.data()}))))
}