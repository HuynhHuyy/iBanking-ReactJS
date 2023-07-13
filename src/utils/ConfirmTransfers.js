import axios from 'axios';
const url = "http://localhost:8080/fundTransfer/confirm-transfer/transpassword";

const submitTransfer = async (data) => {
    try {
        const resp = await axios.post(url, data);
        // console.log(resp);
        return resp.data;
    } catch (err) {
        console.log(err);
        throw new Error("Transaction password is incorrect");
    }
};

export default submitTransfer;