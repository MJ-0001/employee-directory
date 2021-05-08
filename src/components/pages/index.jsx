import React, { useState } from "react";
import Jumbotron from '../Jumbotron';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import API from '../../utils/API';

// import Search from '../Search';
import '../../index.css';

function Site () {
  return (
  <div>
    <Jumbotron />
    <Container>
      <Row>
        <Col size="3">
          <input
            className="form-control row-centered mt-3 mb-3"
            type="text"
            placeholder="Search"
            name="username"
            // onChange={e => setUsername(e.target.value)}
          />
          {/* <Search /> */}
        </Col>
      </Row>
      <Row className="form-group border border-info">
        <Col size="12">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DoB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Site;