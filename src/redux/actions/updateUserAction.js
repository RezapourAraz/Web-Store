import { ref, update } from "firebase/database"
import { database } from "../../firebase"

const updateUserInfo = () => {
    return {
        type: "UPDATE_USER_INFO",
    }
}

export const updateUser = (user , userData) => async (dispatch) =>{
    dispatch(updateUserInfo())
    update(ref(database, 'users/' + userData.uid), {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
    })
}