import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';

const AutoHideToast =({title})=> {
  
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
<Image
src="vercel.svg"
height={100}
width={100}
alt={"temp"}

/>
            <strong className="me-auto">Great Success!</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>Woohoo, your post {title} successfully stored! Redirecting...</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
}

export default AutoHideToast;


