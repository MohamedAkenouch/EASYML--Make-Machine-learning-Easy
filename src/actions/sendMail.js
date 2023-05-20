import * as api from '../api';


// Action Creators


export const sendMail = (newMail) => async () => {
    try {
        await api.sendMail(newMail);
    } catch (error) {
        console.log(error);
    }
}
