import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ForgotNewPassword = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Password is required"
        },
        pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Password must contain lowercase, uppercase, number and special character"
        },
        minLength: {
            value: 8,
            message: "Password must contain at least 8 characters"
        }
    };

    return (
        <>
            <label className="form-label">New Password</label>
            <MDBInput {...register("newPassword", conditions)} wrapperClass='mb-4' placeholder='Enter Password' size='lg' type='text' />
        </>
    );
};


export default ForgotNewPassword;