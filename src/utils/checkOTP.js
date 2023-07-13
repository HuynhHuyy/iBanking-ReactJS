import axios from 'axios';
const url = "http://localhost:8080/forgotPassword";

const checkOTP = async (data) => {
    try {
        const resp = await axios.post(url, data);
        const datas = resp.data;
        return datas;
    } catch (err) {
        throw new Error("Wrong OTP");
    }
};

export default checkOTP;