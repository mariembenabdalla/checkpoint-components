import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ProfilePhoto = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              style={{ width: "66%", padding: "0px", marginTop: "82px" }}
              src="img\img1.jpg"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePhoto;
