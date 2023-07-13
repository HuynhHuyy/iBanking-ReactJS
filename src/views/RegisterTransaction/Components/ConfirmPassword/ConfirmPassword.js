import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ConfirmPassword = ({ register, password }) => {

    const conditions = {
        required: {
            value: true,
            message: "Confirm Password is required"
        },
        validate: value => value === password || "Password and Confirm Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm Password</label>
            <MDBInput {...register("confirmPassword", conditions)} wrapperClass='mb-4' label='' placeholder='Enter Confirm Password' size='lg' type='password' />
        </>
    );
};


export default ConfirmPassword;