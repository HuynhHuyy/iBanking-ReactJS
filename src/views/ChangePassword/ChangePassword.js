import React, { useState,useEffect } from "react";
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
import NewPassword from "./Components/NewPassword/NewPassword";
import ConfirmNewChangePassword from "./Components/ConfirmNewChangePassword/ConfirmNewChangePassword";
import OldPassword from "./Components/OldPassword/OldPassword";
import OldTransPassword from "./Components/OldTransactionPw/OldTransactionPw";
import NewTransPassword from "./Components/NewTransactionPw/NewTransactionPw";
import ConfirmNewTransactionPassword from "./Components/ConfirmNewTransactionPassword.js/ConfirmNewTransactionPassword.js";
import AccountNumberChangePass from "./Components/AccountNumber/AccountNumber";
import submitChangepassword from "../../utils/submitChangepassword";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toast";
const ChangePassword= () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
    const [visible, setVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const SubmitChangePassword = data => {
        delete data.confirmNewChangePassword;
        delete data.confirmnewTransactionPassword;
        delete data.confirmNewChangePassword;
        // console.log(data);
        setIsLoading(true);
        submitChangepassword(data)
        .then(res => {
            console.log(res);
            if (res) {
                return navigate("/user/dashboard");
            }
        }).catch(error => {
            console.log(error);
            console.log(error.message);

            notifyError(error.message);
            setIsLoading(false);
        });


    };



    const confirmNewChangePassword = getValues("newPassword");
    const confirmnewTransactionPassword = getValues("newTransactionPassword");


    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5 resizebox_login'>

                <form onSubmit={handleSubmit(SubmitChangePassword)}>
                    <MDBCard>
                        <MDBCardBody className='px-4'>

                            <div className="text-center">
                                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Change Password</h2>
                            </div>


                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                {/* <label className="form-label">Your Account number:</label>
                                <MDBInput wrapperClass='mb-4' size='lg' type='rel' readonly value={data.accountNumber}/>
                                
                                 */}

                                 <AccountNumberChangePass accountnumber={register}  />
                                    <ErrorMessage className='errors_color' errors={errors} name="accountNumber" as="p" />
                                
                                </MDBCol>
                            </MDBRow>



                            {/* <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <OldPassword oldpassword={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="oldpassword" as="p" />

                                </MDBCol>
                            </MDBRow> */}

                            <MDBRow >
                                <MDBCol md='12'>
                                    <NewPassword changepass={register}  />
                                    <ErrorMessage className='errors_color' errors={errors} name="newPassword" as="p" />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <ConfirmNewChangePassword register={register} confirmNewChangePassword={confirmNewChangePassword}/>
                                    <ErrorMessage className='errors_color' errors={errors} name="confirmNewChangePassword" as="p" />

                                </MDBCol>
                            </MDBRow>

                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <NewTransPassword newtranspassword={register} />
                                    <ErrorMessage className='errors_color' errors={errors} name="newTransactionPassword" as="p" />

                                </MDBCol>
                            </MDBRow>
                            <MDBRow md='12'>
                                <MDBCol md='12'>
                                    <ConfirmNewTransactionPassword newtranspassword={register} confirmnewTransactionPassword={confirmnewTransactionPassword} />
                                    <ErrorMessage className='errors_color' errors={errors} name="confirmnewTransactionPassword" as="p" />

                                </MDBCol>
                            </MDBRow>

           

                            
                            <MDBRow >
                                <MDBCol md='12'>
                                    <Button
                                        className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                                        Change
                                    </Button>
                                </MDBCol>

                            </MDBRow>



                        </MDBCardBody>
                    </MDBCard>
                </form>

            </MDBRow>
        </MDBContainer>
    );
}

export default ChangePassword;
