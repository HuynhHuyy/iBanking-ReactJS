import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ConfirmNewPassword = ({ register, newPassword }) => {

    const conditions = {
        required: {
            value: true,
            message: "Confirm Password is required"
        },
        validate: value => value === newPassword || "Password and Confirm Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm Password</label>
            <MDBInput {...register("confirmNewPassword", conditions)} wrapperClass='mb-4' label='' placeholder='Enter Confirm Password' size='lg' type='text' />
        </>
    );
};


export default ConfirmNewPassword;