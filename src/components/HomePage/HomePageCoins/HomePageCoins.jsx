import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePageCoins.css";
import {
  Container,
  Image,
  Row,
  Col,
  Table,
  ProgressBar,
  Pagination,
  Dropdown,
} from "react-bootstrap";
import { HiDotsVertical } from "react-icons/hi";

import coin1 from "../../../images/bitcoin-ic1.png";
import coin2 from "../../../images/bitcoin-ic2.png";
import coin3 from "../../../images/bitcoin-ic3.png";
import coin4 from "../../../images/bitcoin-ic4.png";
import coin5 from "../../../images/bitcoin-ic5.png";
import coin6 from "../../../images/bitcoin-ic6.png";
import coin7 from "../../../images/bitcoin-ic7.png";
import coin8 from "../../../images/bitcoin-ic8.png";
import coin9 from "../../../images/bitcoin-ic9.png";
import coin10 from "../../../images/bitcoin-ic10.png";

function HomePageCoins() {
  return (
    <>
 
      <Container fluid="xl" className="HomePageCoins_Container">
        <Row>
          <Col xl={12}>
            <button>Leading Projects</button>
            <button>BNB Chain Projects</button>
            <button>Ethereum Projects</button>
          </Col>
        </Row>
        <Row className="HomePageCoins_Container_Table">
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>TARP Score /24h</th>
                <th>Market Cap /24h</th>
                <th>Onboard date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>
                  {" "}
                  <Image src={coin1} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>96 security points</p>{" "}
                    <ProgressBar variant="success" now={96} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Positive">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  {" "}
                  <Image src={coin5} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>80 security points</p>{" "}
                    <ProgressBar variant="warning" now={70} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Negative">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>
                  {" "}
                  <Image src={coin2} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>95 security points</p>{" "}
                    <ProgressBar variant="success" now={95} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Positive">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>
                  {" "}
                  <Image src={coin3} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>97 security points</p>{" "}
                    <ProgressBar variant="success" now={97} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Positive">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  {" "}
                  <Image src={coin8} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>80 security points</p>{" "}
                    <ProgressBar variant="warning" now={60} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Negative">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  {" "}
                  <Image src={coin4} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>96 security points</p>{" "}
                    <ProgressBar variant="success" now={96} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Positive">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>

              <tr>
                <td>07</td>
                <td>
                  {" "}
                  <Image src={coin6} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>96 security points</p>{" "}
                    <ProgressBar variant="success" now={90} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Negative">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  {" "}
                  <Image src={coin7} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>65 security points</p>{" "}
                    <ProgressBar variant="danger" now={45} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Negative">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>
                  {" "}
                  <Image src={coin9} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>96 security points</p>{" "}
                    <ProgressBar variant="success" now={96} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Positive">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  {" "}
                  <Image src={coin10} fluid />
                  Proyect name
                </td>
                <td>
                  <div className="ProgressBar_Center">
                    <p>81 security points</p>{" "}
                    <ProgressBar variant="warning" now={81} />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="td_Center">
                    <p>$33.27B</p> <p className="td_Negative">1.12%</p>
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <p>September 12, 2021 </p>
                </td>
                <td>
                  <HiDotsVertical />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row className="HomePageCoins_Row__Pagination">
          <Col>
            <p>Showing 1-30 out of 1709</p>
          </Col>
          <Col>
            <Pagination size="sm">
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
            </Pagination>
          </Col>
          <Col>
            <div className="Footer_Centrado_Dropdown">
              <p>Show rows</p>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  10
                </Dropdown.Toggle>

                <Dropdown.Menu className="HomePageCoins_Dropdown_Items">
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                   2
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    3
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    4
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    5
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    6
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    7
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    8
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    9
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    10
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePageCoins;
