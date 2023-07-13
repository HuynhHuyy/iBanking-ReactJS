import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
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
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "../../assets/css/UserTransfers/style.css";
import { useSelector } from "react-redux";
import "./style.css";
import submitTransfer from "../../utils/submitTransfer";
import { ErrorMessage } from '@hookform/error-message';
import Money from "./Components/Money";
import AccountnumberTransfer from "./Components/Accountnumber";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toast";

const Transfers = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);
  const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const { accountNumber, balance } = useSelector(state => state.login.user.user);
  const navigate = useNavigate();
  const transfersubmit = data => {
    console.log(data);
    submitTransfer(data)
      .then(res => {
        console.log(res);
        if (res) {
          return navigate("/user/confirm-transfers");
        }
      }).catch(error => {
        console.log(error);
        console.log(error.message);

        notifyError(error.message);
        // setIsLoading(false);
      });
  };




  const onDismiss = () => {
    setVisible(false);
  };

  return (
    // <MDBContainer fluid>

    <MDBRow className='justify-content-center align-items-center m-5'>

      <form onSubmit={handleSubmit(transfersubmit)}>
        <MDBCard>
          <MDBCardBody className='px-4'>

            <div className="text-center">
              <h2 className=" fw-bold mt-1 mb-4  remargin_logintext">Transfers Money</h2>
            </div>
            <MDBRow >
              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <h4 className=" fw-bold mb-2">My Infor:</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <label className="form-label">Username</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={accountNumber}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow md='12'>
              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <label className="form-label">Account Balance</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={`$${balance}`}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow >
              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <h4 className=" fw-bold mt-3 mb-2">Send to:</h4>
              </MDBCol>
            </MDBRow>

            <MDBRow >

              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <label className="form-label">Account Number</label>
              </MDBCol>
              <MDBCol md='10'>
                <AccountnumberTransfer register={register} />

                <ErrorMessage className='errors_color' errors={errors} name="accNumber" as="p" />

              </MDBCol>
            </MDBRow>


            <MDBRow >
              <MDBCol md='2'>
                {/* <Username register={register} />
                <ErrorMessage className='errors_color' errors={errors} name="userName" as="p" /> */}
                <label className="form-label">Money</label>
              </MDBCol>
              <MDBCol md='10'>
                <Money register={register} />
                {/* <MDBInput type='number' wrapperClass='mb-4' size='sm' placeholder="Enter the amount to transfer" name="money"
                /> */}
                <ErrorMessage className='errors_color' errors={errors} name="money" as="p" />

              </MDBCol>
            </MDBRow>

            <MDBRow className="centerbutton" >
              <MDBCol md='3' className="d-flex justify-content-center resizebox_login">
                {/* <Link to="/user/confirm-transfers"> */}
                <Button
                  className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary btn-lg  " type='submit'>
                  Next
                </Button>
                {/* </Link> */}
              </MDBCol>

            </MDBRow>


          </MDBCardBody>
        </MDBCard>
      </form>

    </MDBRow>
    // </MDBContainer>
  );
};

export default Transfers;
