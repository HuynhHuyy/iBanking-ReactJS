import React from "react";
import "../../assets/css/LoginUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import ValidateOtp from "./Components/ValidateOtp/ValidateOtp";

const ForgotPassword = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });


    const onSubmit = data => {
        console.log(data);

    };


    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5 resizebox_login'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <MDBCard>
                        <MDBCardBody className='px-4'>

                            <div className="text-center">
                                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Forgot Password</h2>
                            </div>

                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <ValidateOtp register={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="validateOtp" as="p" />

                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol md='12'>
                                    <Button
                                        className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                                        Next
                                    </Button>
                                </MDBCol>

                            </MDBRow>



                        </MDBCardBody>
                    </MDBCard>
                </form>

            </MDBRow>
        </MDBContainer>
    );
};

export default ForgotPassword;
