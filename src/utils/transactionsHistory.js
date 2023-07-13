import axios from 'axios';
const url = "http://localhost:8080/transactions";

const transactionsHistory = async () => {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (err) {
        console.log(err);
        throw new Error("Somthing wrong");
    }
};

export default transactionsHistory;