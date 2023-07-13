import axios from 'axios';
const url = "http://localhost:8080/sendOTP";

const sendOTP = async (data) => {
    try {
        const resp = await axios.post(url, data);
        const datas = resp.data;
        return datas;
    } catch (err) {
        throw new Error("No account found");
    }
};

export default sendOTP;