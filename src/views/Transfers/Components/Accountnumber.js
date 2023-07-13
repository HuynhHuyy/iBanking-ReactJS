import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const AccountnumberTransfer = ({register}) => {

    const conditions = {
        required: {
            value: true,
            message: "Account number is required"
        },
    };

    return (
        <>
            
            <MDBInput
                {...register("accNumber", conditions)} wrapperClass='mb-4' placeholder='Enter Account number to send' type='number'
            />
        </>
    );
};


export default AccountnumberTransfer;