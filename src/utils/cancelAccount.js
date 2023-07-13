import axios from 'axios';
const url = "http://localhost:8080/admin/dashboard/cancel";

const approveAccount = async (id) => {
    try {
        const resp = await axios.delete(url, id);
        return resp.data;
    } catch (err) {
        throw new Error("Something wrong");
    }
};

export default approveAccount;