import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const TransactionPassTransfer = ({register}) => {

    const conditions = {
        required: {
            value: true,
            message: "Transaction password is required"
        },
    };

    return (
        <>
            <MDBInput
                {...register("transPw", conditions)} wrapperClass='mb-4' placeholder='Enter Transaction password to send' type='number'
            />
        </>
    );
};


export default TransactionPassTransfer;