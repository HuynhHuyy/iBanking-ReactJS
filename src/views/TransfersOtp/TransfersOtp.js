import React, { useState } from "react";
import "../../assets/css/UserTransfers/style.css";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
    from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import TransactionPassTransfer from "./Components/TransactionPass";
import { ErrorMessage } from '@hookform/error-message';
import submitTransfer from "../../utils/ConfirmTransfers";
import { notifyError } from '../../utils/toast';
import { useNavigate } from "react-router-dom";
const ConfirmTransfers = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);
    const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const verifyTransfer = data => {
        console.log(data);
        setIsLoading(true);
        submitTransfer(data).then(res => {
            console.log(res);
        // if res is true, alert success and redirect to login page
        if (res) {
            notifyError("Transfer Success");
            return navigate("/user/dashboard");

        }
           
        }).catch(error => {
            notifyError(error.response.data);
            setIsLoading(false);
        });


    };

    const onDismiss = () => {
        setVisible(false);
    };

    return (
        // <MDBContainer fluid>

        <MDBRow className='justify-content-center align-items-center m-5 resizebox_login'>

            <form onSubmit={handleSubmit(verifyTransfer)}>
                <MDBCard>
                    <MDBCardBody className='px-4'>

                        <div className="text-center">
                            <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Verification Code</h2>
                        </div>

                        <MDBRow >
                            <MDBCol md='4'>
                             
             <label className="form-label">Transaction Password</label>
                               
                            </MDBCol>
                            <MDBCol md='8'>
                            <TransactionPassTransfer register={register} />
                            <ErrorMessage className='errors_color' errors={errors} name="transPw" as="p" />
                            </MDBCol>
                        </MDBRow>


                        <MDBRow className="centerbutton" >
                            <MDBCol md='3' className="d-flex justify-content-center">

                                <Button
                                    className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                                    OK
                                </Button>

                            </MDBCol>

                        </MDBRow>


                    </MDBCardBody>
                </MDBCard>
            </form>

        </MDBRow>
        // </MDBContainer>
    );
}

export default ConfirmTransfers;
