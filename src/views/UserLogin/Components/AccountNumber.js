import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const AccountNumber = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Username is required"
        },
        pattern: {
            value: /^\d+$/,
            message: "Username only contains number"
        },
        minLength: {
            value: 8,
            message: "Username must contain at least 8 characters"
        },
        maxLength: {
            value: 20,
            message: "Username should be a maximun of 20 characters"
        },
    };

    return (
        <>
            <label className="form-label">Username</label>



            <MDBInput
                {...register("accountNumber", conditions)} wrapperClass='mb-4' placeholder='Enter Username' size='lg' type='rel'
            />
        </>
    );
};


export default AccountNumber;