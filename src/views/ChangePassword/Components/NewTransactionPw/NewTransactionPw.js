import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const NewTransPassword = ({ newtranspassword }) => {

    const conditions = {
        required: {
            value: true,
            message: "New transaction password is required"
        }
    };

    return (
        <>
            <label className="form-label">Enter Your New Transactions Password</label>
            <MDBInput {...newtranspassword("newTransactionPassword", conditions)} wrapperClass='mb-4' placeholder='Enter Your New Transaction Password' size='lg' type='password' />
        </>
    );
};


export default NewTransPassword;