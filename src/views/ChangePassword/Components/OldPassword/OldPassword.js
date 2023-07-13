import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const OldPassword = ({ oldpassword }) => {

    const conditions = {
        required: {
            value: true,
            message: "Old password is required"
        }
    };

    return (
        <>
            <label className="form-label">Enter Your Old Password</label>
            <MDBInput {...oldpassword("oldpassword", conditions)} wrapperClass='mb-4' placeholder='Enter Your Old Password' size='lg' type='password' />
        </>
    );
};


export default OldPassword;