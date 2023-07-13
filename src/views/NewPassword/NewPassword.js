import React, { useState } from "react";
import "../../assets/css/LoginUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
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
import ConfirmNewPassword from "./Components/Forgot_ConfirmPassword/Confirm_Newpassword";
import ForgotNewPassword from "./Components/Forgot_NewPassword/Forgot_NewPassword";
import { notifyError, notifySuccess } from "../../utils/toast";
import newPasswordOTP from '../../utils/newPasswordOTP';
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import * as appActions from '../../actions';


const NewPassword = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
    const state = useSelector(state => state.accountNumber.data);
    const newPassword = getValues("newPassword");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        setIsLoading(true);
        delete data.confirmNewPassword;
        data.accountNumber = state?.accountNumber || null;
        newPasswordOTP(data)
            .then(res => {
                if (res) {
                    notifySuccess("Success");
                }
                dispatch(appActions.deleteAccoutNumber());
                return navigate("/auth/login/user");
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
                                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">New Password</h2>
                            </div>
                            <MDBRow >
                                <MDBCol md='12'>
                                    <ForgotNewPassword register={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="newPassword" as="p" />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <ConfirmNewPassword register={register} newPassword={newPassword} />
                                    <ErrorMessage className='errors_color' errors={errors} name="confirmNewPassword" as="p" />

                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol md='12'>
                                    {
                                        isLoading ? <Loading /> :
                                            <Button
                                                className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                                                Change
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

export default NewPassword;
