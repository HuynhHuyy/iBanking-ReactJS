import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const NewPassword = ({ changepass }) => {

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
            <label className="form-label">Enter New Password</label>
            <MDBInput {...changepass("newPassword", conditions)} wrapperClass='mb-4' placeholder='Enter New Password' size='lg' type='password' />
        </>
    );
};


export default NewPassword;