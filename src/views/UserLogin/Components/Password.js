import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const Password = ({register}) => {

    const conditions = {
        required: {
            value: true,
            message: "Password is required"
        },
    };

    return (
        <>
    <label className="form-label">Password</label>

            
            
            <MDBInput
                {...register("password", conditions)} wrapperClass='mb-4' placeholder='Enter Password' size='lg' type='password'
            />
        </>
    );
};


export default Password;