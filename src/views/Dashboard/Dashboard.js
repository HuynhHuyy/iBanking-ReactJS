import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import TopCards from "../../components/dashboard/TopCards";


const Dashboard = () => {

  const { email, status, accType } = useSelector(state => state.login.user.user);
  const [balance, setBalance] = useState();

  const displayStatus = (status) => {
    return status ? "Yes" : "No";
  };

  useEffect(() => {
    axios.get('http://localhost:8080/login')
      .then(res => {
        setBalance(res?.data?.balance);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Personal"
            subtitle="Hello"
            earning={email.replace('@gmail.com', '')}
            icon="bi bi-person-circle"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Balance"
            subtitle="Balance"
            earning={`$${balance}`}
            icon="bi bi-eye"
          // icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Internet Baking"
            earning={displayStatus(status)}
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Account type"
            earning={accType}
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <RecentTransactions />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
