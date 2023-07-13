import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const TransactionPassword = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Transaction Password is required"
        },
        pattern: {
            value: /^[0-9]{6,6}$/,
            message: "Transaction Password is only six numbers long"
        },
    };

    return (
        <>
            <label className="form-label">Transaction Password</label>
            <MDBInput {...register("transactionPassword", conditions)} wrapperClass='mb-4' placeholder='Enter Transaction Password' size='lg' type='password' />
        </>
    );
};


export default TransactionPassword;