import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { storage } from '../../firebase';

const getUpdateProfile = () => {
    return {
        type: "UPDATE_PROFILE_IMAGE",
    }
}


export const uploadProfileImage = (file, user) => async (dispatch) => {
    dispatch(getUpdateProfile())
    const fileRef = ref(storage, user.uid + '.png' )
    const snapshot = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(user, {photoURL})
  }
  