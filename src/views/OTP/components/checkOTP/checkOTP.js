import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const checkOTP = ({ register }) => {

    return (
        <>
            <label className="form-label">OTP</label>
            <MDBInput
                {...register("otp")} wrapperClass='mb-4' placeholder='Enter OTP' size='lg' type='rel'
            />
        </>
    );
};


export default checkOTP;