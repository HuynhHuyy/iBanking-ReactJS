import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const AccountNumber = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Account Number is required"
        },
        pattern: {
            value: /^\d+$/,
            message: "Account Number only contains number"
        },
        minLength: {
            value: 8,
            message: "Account Number must contain at least 8 characters"
        },
        maxLength: {
            value: 20,
            message: "Account Number should be a maximun of 20 characters"
        },
    };

    return (
        <>
            <label className="form-label">Account Number</label>
            <MDBInput
                {...register("accountNumber", conditions)} wrapperClass='mb-4' placeholder='Enter Account Number' size='lg' type='rel'
            />
        </>
    );
};


export default AccountNumber;