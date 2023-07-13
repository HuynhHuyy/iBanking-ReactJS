import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ValidateOtp = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "OTP is required"
        },
        pattern: {
            value: /^\d+$/,
            message: "OTP only contains number"
        },
        length: {
            value: 8,
            message: "OTP must contain 8 characters"
        },
    };

    return (
        <>
            <label className="form-label">OTP</label>
            <MDBInput
                {...register("validateOtp", conditions)} wrapperClass='mb-4' placeholder='Enter OTP' size='lg' type='rel'
            />
        </>
    );
};


export default ValidateOtp;