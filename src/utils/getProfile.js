import axios from 'axios';

const getProfile = async (userId) => {

    const url = `http://localhost:8080/AccountDetails/${userId}`;

    try {
        const resp = await axios.get(url);
        const datas = resp.data;
        return datas;
    } catch (err) {
        throw new Error("Profile is not found");
    }
};

export default getProfile;