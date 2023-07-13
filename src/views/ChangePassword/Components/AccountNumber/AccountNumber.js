import React,{ useState,useEffect } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';

const AccountNumberChangePass = ({ accountnumber }) => {
// console.log(confirm);
    const conditions = {
   };



   
   const [data, setData] = useState([]);
   useEffect(() => {
     axios
       .get('http://localhost:8080/login')
       .then((response) => {
         // console.log(response.data);
         setData(response.data);
         // console.log(data);
       })
       .catch((error) => console.error(error));
      
   }, []);
    return (
        <>
           <label className="form-label">Your Account number:</label>
            <MDBInput {...accountnumber("accountNumber", conditions)} wrapperClass='mb-4' readonly value={data.accountNumber} size='lg' />
        </>
    );
};


export default AccountNumberChangePass;