import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import './style.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,

}
  from 'mdb-react-ui-kit';
import AdminNumber from "./Components/AdminNumber";
import AdminPassword from "./Components/AdminPassword";
import submitAdminLogin from "../../utils/submitAdminLogin";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toast";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const AdminLogin = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();

  const checkAdminLogin = data => {

    console.log(data);
    submitAdminLogin(data)
      .then(res => {
        console.log(res);
        if (res) {
          return navigate("/admin/homepage");
        }

      }).catch(error => {
        notifyError(error.message);
      });
  };

  return (
    <MDBContainer fluid >
      <MDBRow className='justify-content-center align-items-center m-5 ' >
        <form className='px-4 ' onSubmit={handleSubmit(checkAdminLogin)}>
          <MDBCard>
            <MDBCardBody className='px-4 bg_admin'>
              <div className="text-center">
                <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Admin Login</h2>
              </div>
              <MDBRow >
                <MDBCol md='12'>
                  <AdminNumber register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="email" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <AdminPassword register={register} />
                  <ErrorMessage className='errors_color' errors={errors} name="password" as="p" />
                </MDBCol>
              </MDBRow>
              <MDBRow >
                <MDBCol md='12'>
                  {
                    <Button
                      className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                      Sign in
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

export default AdminLogin;
