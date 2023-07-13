import { Card, CardBody } from "reactstrap";
import React, {useState} from "react";


const TopCardsBalance = (props) => {
  // const [earning, setEarning] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <a className={props.icon} onClick={ () => setShow(!show) }></a>
          </div>
          <div className="ms-3">
            <small className="text-muted">{props.subtitle}</small>
            <h6 className="mb-0 font-weight-bold">{props.earning}</h6>
            {/* {props.earning.showPassword ? <Visibility /> : <VisibilityOff />} */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCardsBalance;
