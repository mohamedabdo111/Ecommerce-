import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Usersidebar from "../../../components/User/usersidebar";
import UserEditAddress from "../../../components/User/usereditaddress";
import { useParams } from "react-router-dom";
import UpdateAddAddressHock from "../../../exporthoocks/user address/User_Update_Address_Hock";
import UpdateAddressHock from "../../../exporthoocks/user address/User_Update_Address_Hock";

const UserEditAddresspage = () => {
  return (
    <Container>
      <Row className="mt-2 p-2">
        <Col xs="3" sm="3" md="2">
          <Usersidebar></Usersidebar>
        </Col>
        <Col xs="9" sm="9" md="10">
          <UserEditAddress> </UserEditAddress>
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddresspage;
