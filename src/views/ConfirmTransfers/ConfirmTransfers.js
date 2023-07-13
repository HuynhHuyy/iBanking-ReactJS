import React, { useState,useEffect }from "react";

import {
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
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
const ConfirmTransfers = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);
  const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });
  const { accountNumber, balance } = useSelector(state => state.login.user.user);

  const dispatch = useDispatch();
  // const data = useSelector((state) => state.data);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/fundTransfer/confirm-transfer')
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        // console.log(data);
      })
      .catch((error) => console.error(error));
     
  }, []);


  const submitConfirmTransfer = data => {
    // console.log(data);

  };

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    // <MDBContainer fluid>

    <MDBRow className='justify-content-center align-items-center m-5 resizebox_login'>

      <form onSubmit={handleSubmit(submitConfirmTransfer)}>
        <MDBCard>
          <MDBCardBody className='px-4'>

            <div className="text-center">
              <h2 className=" fw-bold mt-1 mb-5  remargin_logintext">Confirm Transfers Money</h2>
            </div>

            <MDBRow >
              <MDBCol md='2'>
                <label className="form-label">Username</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={accountNumber}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow md='12'>
              <MDBCol md='2'>
                <label className="form-label">Account Balance</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={`$${balance}`}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow md='12'>
              <br></br>
            </MDBRow>

            <MDBRow >
              <MDBCol md='2'>
                <label className="form-label">Account Number</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={data.payeeAccNumber}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow >
              <MDBCol md='2'>
                <label className="form-label">Username</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={data.payeeName}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md='2'>
                <label className="form-label">Money</label>
              </MDBCol>
              <MDBCol md='10'>
                <MDBInput type='number' wrapperClass='mb-4' size='sm' readonly value={data.money}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow >

              <MDBCol md='6'>
                <Link to="/user/transfers">
                  <Button
                    className="mb-4 w-100 gradient-custom-2 fixsizebutton" variant="danger" type='submit'>
                    Back
                  </Button>
                </Link>
              </MDBCol>

              <MDBCol md='6'>


                <Link to="/user/transfersotp">
                  <Button
                    className="mb-4 w-100 gradient-custom-2 fixsizebutton btn-primary" type='submit'>
                    Next
                  </Button>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </form>

    </MDBRow>
    // </MDBContainer>
  );
};

export default ConfirmTransfers;
