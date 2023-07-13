import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const Email = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Email is required"
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid format email"
        }
    };

    return (
        <>
            <label className="form-label">Email</label>
            <MDBInput
                {...register("email", conditions)} wrapperClass='mb-4' placeholder='Enter Email' size='lg' type='rel'
            />
        </>
    );
};


export default Email;