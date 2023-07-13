import axios from 'axios';
const url = "http://localhost:8080/changepassword";

const submitChangepassword = async (data) => {
    try {
        const resp = await axios.put(url, data);
        return resp.data;
    } catch (err) {
        throw new Error("Invalid infor");
    }
};

export default submitChangepassword;