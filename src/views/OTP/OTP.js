import React, { useState } from "react";
import "../../assets/css/LoginUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import { notifyError, notifySuccess } from "../../utils/toast";
import Loading from '../../components/Loading';
import CheckOTP from "./components/checkOTP";
import checkOTP from "../../utils/checkOTP";
import { useSelector } from "react-redux";


const OTP = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const state = useSelector(state => state.accountNumber.data);

    const onSubmit = data => {
        data.accountNumber = state?.accountNumber || null;
        setIsLoading(true);
        checkOTP(data)
            .then(res => {
                if (res) {
                    notifySuccess("Enter your new password");
                };
                return navigate("/auth/new-password");
            })
            .catch(error => {
                notifyError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    return (
        <MDBContainer fluid>
            <MDBRow className='justify-content-center align-items-center m-5 resizebox_login'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MDBCard>
                        <MDBCardBody className='px-4'>
                            <div className="text-center">
                                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">OTP</h2>
                            </div>
                            <MDBRow >
                                <MDBCol md='12'>
                                    <CheckOTP register={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="checkOTP" as="p" />
                                </MDBCol>


                            </MDBRow>
                            <MDBRow >
                                <MDBCol md='12'>
                                    {
                                        isLoading ? <Loading /> : <Button
                                            className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                                            Next
                                        </Button>
                                    }
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBRow>
        </MDBContainer>
    );
};

export default OTP;
