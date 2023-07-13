import axios from 'axios';
const url = "http://localhost:8080/logout";

const submitLogout = async (data) => {
    try {
        const resp = await axios.get(url);
        return resp;
    } catch (err) {
        console.log(err);
        throw new Error("Logout unsuccessfully");
    }
};

export default submitLogout;