import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import getAccountStatusFalse from '../../utils/getAccountStatusFalse';
import approveAccount from '../../utils/approveAccount';
import { notifyError, notifySuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";


const AdminHomepage = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAccountStatusFalse()
      .then(res => {
        if (res) {
          setData(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [data]);

  const handleApproval = (id) => {
    approveAccount({
      "id": id
    })
      .then(res => {
        if (res) {
          notifySuccess("Approve Successfully");
        }
      })
      .catch(error => {
        notifyError(error.message);
      });
  };

  const handleCancel = (id) => {
    approveAccount({
      "id": id
    })
      .then(res => {
        if (res) {
          notifySuccess("Account is deleted");
        }
      })
      .catch(error => {
        notifyError(error.message);
      });
  };

  const handleLogout = () => {
    return navigate("/auth/login/admin");
  };

  return (
    <div>
      <h1 className="text-center bg_header pb-2">Welcome to iBanking</h1>
      <Card>
        <CardBody>
          <CardTitle tag="h5">List of account opening request </CardTitle>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Email</th>
                <th>Account Number</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {

                data?.length > 0 ? data.map((account, index) => (
                  <tr className="text-center" key={index}>
                    <td>{account.id}</td>
                    <td>{account.email}</td>
                    <td>{account.accountNumber}</td>
                    <td>{account.email.replace('@gmail.com', '')}</td>
                    <td>
                      <Button onClick={() => handleApproval(account.id)} color="success">Approve</Button>&nbsp;&nbsp;
                      <Button onClick={() => handleCancel(account.id)} color="danger">Decline</Button>
                    </td>
                  </tr>
                ))
                  : <tr>
                    <td colSpan="4">No account to approve</td>
                  </tr>
              }
            </tbody>
          </Table>
          <Button className="btn" color="primary" onClick={() => handleLogout()}>
            Logout
          </Button>
        </CardBody>
      </Card>
    </div>

  );

};


export default AdminHomepage;