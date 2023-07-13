import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const Money = ({register}) => {

    const conditions = {
        required: {
            value: true,
            message: "Money is required"
        },
    };

    return (
        <>
            
            <MDBInput
                {...register("money", conditions)} wrapperClass='mb-4' placeholder='Enter Money' type='number'
            />
        </>
    );
};


export default Money;