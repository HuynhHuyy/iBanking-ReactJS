import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const ConfirmNewChangePassword = ({ register, confirmNewChangePassword }) => {
// console.log(confirm);
    const conditions = {
        required: {
            value: true,
            message: "Confirm Password is required"
        },
        validate: value => value === confirmNewChangePassword || "Password and Confirm Password not match"
    };

    return (
        <>
            <label className="form-label">Confirm Password</label>
            <MDBInput {...register("confirmNewChangePassword", conditions)} wrapperClass='mb-4' label='' placeholder='Enter Confirm Password' size='lg' type='password' />
        </>
    );
};


export default ConfirmNewChangePassword;