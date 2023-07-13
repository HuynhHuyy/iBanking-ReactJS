import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ConfirmNewTransactionPassword = ({ newtranspassword, confirmnewTransactionPassword }) => {
// console.log(confirm);
    const conditions = {
        required: {
            value: true,
            message: "Confirm Password is required"
        },
        validate: value => value === confirmnewTransactionPassword || "Password and Confirm Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm Password</label>
            <MDBInput {...newtranspassword("confirmnewTransactionPassword", conditions)} wrapperClass='mb-4' label='' placeholder='Enter Confirm Password' size='lg' type='password' />
        </>
    );
};


export default ConfirmNewTransactionPassword;