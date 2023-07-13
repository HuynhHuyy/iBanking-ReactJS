import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import ComponentCard from '../../components/ComponentCard';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import getProfile from '../../utils/getProfile';

const About = () => {

    const user = useSelector((state) => state.login.user.user);

    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [occupational, setOccupational] = useState();
    const [permanentAddress, setPermanentAddress] = useState();
    const [residentalAddress, setResidentalAddress] = useState();


    useEffect(() => {
        getProfile(user?.id)
            .then(res => {
                const { fullName, dob, residentalAddress, permanentAddress, occupational } = res;
                setName(fullName);
                setDob(dob);
                setOccupational(occupational);
                setPermanentAddress(permanentAddress);
                setResidentalAddress(residentalAddress);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    return (
        <Row>
            <Col>
                <ComponentCard
                    title="My profile"
                    subtitle={
                        <p>
                            This page show your personal profile, you can only view
                        </p>
                    }
                >
                </ComponentCard>
                <MDBCard>
                    <MDBCardBody className='px-4'>
                        <MDBRow >
                        </MDBRow>

                        <MDBRow >
                            <MDBCol md='2'>
                                <label className="form-label">Name</label>
                            </MDBCol>
                            <MDBCol md='10'>
                                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={name || ''}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow md='12'>
                            <MDBCol md='2'>
                                <label className="form-label">Occupational</label>
                            </MDBCol>
                            <MDBCol md='10'>
                                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={occupational || ''}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow >
                            <MDBCol md='2'>
                                <label className="form-label">Permanent address</label>
                            </MDBCol>
                            <MDBCol md='10'>
                                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={permanentAddress || ''}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow >
                            <MDBCol md='2'>
                                <label className="form-label">Residental address</label>
                            </MDBCol>
                            <MDBCol md='10'>
                                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={residentalAddress || ''}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow >
                            <MDBCol md='2'>
                                <label className="form-label">Date of Birth</label>
                            </MDBCol>
                            <MDBCol md='10'>
                                <MDBInput wrapperClass='mb-4' size='sm' type='rel' readonly value={dob || ''}
                                />
                            </MDBCol>
                        </MDBRow>



                    </MDBCardBody>
                </MDBCard>
            </Col>
        </Row>
    );
};

export default About;
