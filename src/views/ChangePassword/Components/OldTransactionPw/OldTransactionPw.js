import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const OldTransPassword = ({ oldtranspassword, confirmNewTransactionPassword }) => {

    const conditions = {
        required: {
            value: true,
            message: "Old transaction password is required"
        },
        validate: value => value === confirmNewTransactionPassword || "Password and Confirm Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm New Transactions Password</label>
            <MDBInput {...oldtranspassword("confirmTransactionPassword", conditions)} wrapperClass='mb-4' placeholder='Enter Your New Transaction Password' size='lg' type='password' />
        </>
    );
};


export default OldTransPassword;