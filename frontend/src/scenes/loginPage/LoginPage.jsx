import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography } from "@mui/material";
import Form from "./Form";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import './Login.css';

const LoginPage = () => {
  return (
    <MDBContainer className="my-5 gradient-form">
  <MDBRow>
    <MDBCol col='6' className="mb-5">
      <div className="d-flex flex-column ms-5">
        <div className="text-center">
          <img src="./src/assets/logo.png" style={{ width: '185px' }} alt="logo" />
          <h4 className="mt-1 mb-5 pb-1">Welcome to Conex</h4>
        </div>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          We are greatful to welcome you!
        </Typography>
        <Form />
      </div>
    </MDBCol>
    
  <MDBCol col='6' className="mb-5 side-image">
  <div className="text-center">
    <img src="./src/assets/side.png" style={{ width: '600px', marginTop: '3rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }} alt="logo" />
  </div>
</MDBCol>


  </MDBRow>
</MDBContainer>

  );
}

export default LoginPage;
