import axios from 'axios';
const url = "http://localhost:8080/fundTransfer";
const submitTransfer = async (data) => {
    try {
        const resp = await axios.post(url, data);
        // console.log(resp);
        return resp.data;
    } catch (err) {
        const resget = await axios.get(url);
        console.log(err.response.data);
        console.log(resget.data.status);
        if (err.response.data ==="Balance is not enough"){
            throw new Error("Your balance is not enough to transfer");
        }else if (resget.data.status === false) {
        throw new Error("Your account is not active. Please wait admin approve your account to transfer");
        }else if(resget.data.status === true){
            throw new Error("Account number payee not found or not active. Please check again");
        }else {
        throw new Error("Error. Try again");
        }
    }
};

export default submitTransfer;