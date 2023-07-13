import React, { useState } from "react";
import "../../assets/css/LoginUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import AccountNumber from "./Components/AccountNumber/AccountNumber";
import sendOTP from "../../utils/sendOTP";
import { notifyError, notifySuccess } from "../../utils/toast";
import Loading from '../../components/Loading';
import { useDispatch } from "react-redux";
import * as appActions from '../../actions';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        setIsLoading(true);
        sendOTP(data)
            .then(res => {
                if (res) {
                    notifySuccess("Please get OTP from your email");
                }
                dispatch(appActions.setAccountNumber({
                    accountNumber: data.accountNumber
                }));
                return navigate("/auth/otp");
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
                                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Forgot Password</h2>
                            </div>

                            <MDBRow >
                                <MDBCol md='12'>
                                    <AccountNumber register={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="accountNumber" as="p" />
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

export default ForgotPassword;
