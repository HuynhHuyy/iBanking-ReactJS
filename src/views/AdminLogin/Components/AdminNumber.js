import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';


const AdminNumber = ({ register }) => {

    const conditions = {
        required: {
            value: true,
            message: "Admin number is required"
        },
        // pattern: {
        //     value: /^\d+$/,
        //     message: "Only contains number"
        // },
        // minLength: {
        //     value: 8,
        //     message: "Admin name must contain at least 8 characters"
        // },
        // maxLength: {
        //     value: 20,
        //     message: "Admin name should be a maximun of 20 characters"
        // },
    };

    return (
        <>
            <label className="form-label">Admin Name</label>

            <MDBInput
                {...register("email", conditions)} wrapperClass='mb-4' placeholder='Admin name' size='lg' type='rel'
            />
        </>
    );
};


export default AdminNumber;