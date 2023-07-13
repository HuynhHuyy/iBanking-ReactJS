import axios from 'axios';
const url = "http://localhost:8080/admin/login";
const submitAdminLogin = async (data) => {
    try {
        const resp = await axios.post(url, data);
        // console.log(resp);
        return resp.data;
    } catch (err) {
        console.log(err.response.data);
        if (err.response.data === "Admin is not found"){
            throw new Error("Admin is not found");
        }else{
            throw new Error("Password is incorrect");

        }
    
    }
};

export default submitAdminLogin;