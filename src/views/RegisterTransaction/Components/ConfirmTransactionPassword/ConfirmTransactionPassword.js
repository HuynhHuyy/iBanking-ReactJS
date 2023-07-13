import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ConfirmTransactionPassword = ({ register, transactionPassword }) => {

    const conditions = {
        required: {
            value: true,
            message: "Confirm Transaction Password is required"
        },
        validate: value => value === transactionPassword || "Transaction Password and Confirm Transaction Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm Transaction Password</label>
            <MDBInput  {...register("confirmTransactionPassword", conditions)} wrapperClass='mb-4' placeholder='Enter Confirm Transaction Password' size='lg' type='password' />
        </>
    );
};


export default ConfirmTransactionPassword;