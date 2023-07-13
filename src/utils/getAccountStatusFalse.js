import axios from 'axios';

const getAccountStatusFalse = async () => {

    const url = `http://localhost:8080/admin/dashboard`;

    try {
        const resp = await axios.get(url);
        const datas = resp.data;
        return datas;
    } catch (err) {
        throw new Error("Account is not found");
    }
};

export default getAccountStatusFalse;