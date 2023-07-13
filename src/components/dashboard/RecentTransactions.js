import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { notifyError } from "../../utils/toast";
import transactionsHistory from "../../utils/transactionsHistory";
import '../../assets/css/Transactions/style.css';


const ProjectTables = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    transactionsHistory()
      .then(res => {
        if (res) {
          setData(res);
        }
      })
      .catch(error => {
        notifyError(error.message);
      });
  });

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Recent Transactions</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            The latest 5 transactions
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Money</th>
                <th>Type</th>
                <th>Name</th>
                <th>Account Number</th>
              </tr>
            </thead>
            {
              data.length > 0 ?
                <tbody>
                  {data.map((tdata, index) => (
                    <tr key={index} className="border-top trTransaction" >
                      <td>{tdata.transId}</td>
                      <td>{tdata.date}</td>
                      <td>{`$${tdata.money}`}</td>
                      <td>{!tdata.type ? 'Receipt' : 'Transfer'}</td>
                      <td>{tdata.accName}</td>
                      <td>{tdata.accNumber}</td>
                    </tr>
                  ))}
                </tbody>
                : <div>
                  No transactions
                </div>
            }
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};


export default ProjectTables;
