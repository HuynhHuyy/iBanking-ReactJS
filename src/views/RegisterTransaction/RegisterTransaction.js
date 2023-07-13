import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from '@hookform/error-message';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import "../../assets/css/RegisterTransaction/style.css";
import AccountNumber from './Components/AccountNumber';
import Password from './Components/Password';
import TransactionPassword from './Components/TransactionPassword';
import ConfirmPassword from './Components/ConfirmPassword';
import ConfirmTransactionPassword from './Components/ConfirmTransactionPassword';
import Loading from '../../components/Loading';
import registerTransaction from '../../utils/registerTransaction';
import { notifyError, notifySuccess } from '../../utils/toast';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Email from './Components/Email';

const RegisterTransaction = () => {

  const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = data => {
    setIsLoading(true);
    delete data.confirmPassword;
    delete data.confirmTransactionPassword;
    registerTransaction(data)
      .then(res => {
        if (res) {
          setIsLoading(false);
          notifySuccess("Register successfully");
          return navigate("/auth/login/user");
        }
      })
      .catch(error => {
        notifyError(error.message);
        setIsLoading(false);
      });
  };

  const password = getValues("password");
  const transactionPassword = getValues("transactionPassword");

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MDBCard>
            <MDBCardBody className='px-4 bg_loginpage'>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Register for internet banking</h3>
              <MDBRow>
                <MDBCol md='12'>
                  <AccountNumber register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="accountNumber" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <Email register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="email" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6'>
                  <Password register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="password" as="p" />
                </MDBCol>
                <MDBCol md='6'>
                  <TransactionPassword register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="transactionPassword" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6'>
                  <ConfirmPassword register={register} password={password} />
                  <ErrorMessage className='errors_color' errors={errors} name="confirmPassword" as="p" />
                </MDBCol>
                <MDBCol md='6'>
                  <ConfirmTransactionPassword register={register} transactionPassword={transactionPassword} />
                  <ErrorMessage className='errors_color' errors={errors} name="confirmTransactionPassword" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className='d-flex justify-content-center'>
                  {
                    isLoading ? <Loading /> : <Button variant='primary' type="submit" size='lg'>
                      Submit
                    </Button>
                  }

                </MDBCol>
                <MDBCol className='d-flex justify-content-center'>
                  <Link to="/auth/login/user">
                    <Button variant='success' className='mx-6' size='lg'>
                      Back
                    </Button>
                  </Link>

                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterTransaction;