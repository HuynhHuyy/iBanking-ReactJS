import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
}
  from 'mdb-react-ui-kit';
import { notifyError } from '../../utils/toast';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import submitLoginForm from '../../utils/submitLoginForm';
import Password from './Components/Password';
import Username from './Components/AccountNumber';
import Loading from '../../components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LoginUser/style.css";
import * as appActions from '../../actions';

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const { login, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  if (user) {
    return <Navigate to="/user/dashboard" replace />;
  }

  const onSubmit = data => {
    setIsLoading(true);
    submitLoginForm(data)
      .then(res => {
        if (res) {
          delete res.password;
          delete res.transactionPassword;
          delete res.otp;
          login(res);
          dispatch(appActions.login({
            user: res
          }));
          setIsLoading(false);
        }
      })
      .catch(error => {
        notifyError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <MDBContainer fluid >
      <MDBRow className='justify-content-center align-items-center m-5 ' >
        <form className='px-4 ' onSubmit={handleSubmit(onSubmit)}>
          <MDBCard>
            <MDBCardBody className='px-4 bg_loginpage'>
              <div className="text-center">
                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Login</h2>
              </div>
              <MDBRow >
                <MDBCol md='12'>
                  <Username register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="accountNumber" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <Password register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="password" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow >
                <MDBCol md='12'>
                  {
                    isLoading ?
                      <Loading /> :
                      <Button
                        className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                        Sign in
                      </Button>
                  }
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <a className="d-flex flex-row align-items-center justify-content-center" href="/auth/forgot-password">Forgot password?</a>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <br></br>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                    <p className="mb-0">Don't have an account?</p>
                    <Link to="/auth/register">
                      <Button variant='outline-danger' className='mx-2'>
                        Register
                      </Button>
                    </Link>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;