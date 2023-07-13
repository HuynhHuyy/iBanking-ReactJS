import axios from 'axios';
const url = "http://localhost:8080/newPassword";

const newPasswordOTP = async (data) => {
    try {
        const resp = await axios.put(url, data);
        return resp.data;
    } catch (err) {
        throw new Error("Something wrong");
    }
};

export default newPasswordOTP;