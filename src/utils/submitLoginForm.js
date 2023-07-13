import axios from 'axios';
const url = "http://localhost:8080/login";

const submitLoginForm = async (data) => {
    try {
        const resp = await axios.post(url, data);
        return resp.data;
    } catch (err) {
        throw new Error("Invalid Account Number or Password");
    }
};

export default submitLoginForm;