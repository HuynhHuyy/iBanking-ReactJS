import axios from 'axios';
const url = "http://localhost:8080/admin/dashboard";

const approveAccount = async (id) => {
    try {
        const resp = await axios.put(url, id);
        return resp.data;
    } catch (err) {
        throw new Error("Something wrong");
    }
};

export default approveAccount;