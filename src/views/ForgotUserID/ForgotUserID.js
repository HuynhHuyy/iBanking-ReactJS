import React from "react";

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
import { Link } from 'react-router-dom';

const ForgotUserID = () => {

    const { register, getValues, formState: { errors }, handleSubmit } = useForm({ mode: 'onChange' });


    const onSubmit = data => {
        console.log(data);

    };


    return (
<>
    forgot user id
</>
    );
}

export default ForgotUserID;
