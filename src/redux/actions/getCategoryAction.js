
const getProductsCategory = (category) => {
    return {
        type: "GET_PRODUCTS_CATEGORY",
        payload: category,
    }
}


 export const getCaegoryList = (products) => async (dispatch) => {
    const category = {
        mobile: [],
        watch: []
    };
    await products.map(item => {
        if(item.category === "گوشی موبایل") {
            category.mobile = [...category.mobile, item]

        } else if (item.category === "ساعت هوشمند") {
            category.watch = [...category.watch, item]
        }
    return category
    })
    dispatch(getProductsCategory(category))
}
