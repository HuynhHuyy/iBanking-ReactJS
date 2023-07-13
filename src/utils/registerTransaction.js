import axios from 'axios';
const url = "http://localhost:8080/addAccount";

const registerTransaction = async (data) => {
    try {
        const resp = await axios.post(url, data);
        const datas = resp.data;
        return datas;
    } catch (err) {
        throw new Error("Account number or Email has been used");
    }
};

export default registerTransaction;