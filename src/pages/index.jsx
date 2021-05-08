import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Site() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      await fetch('https://randomuser.me/api/?results=4')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results);
      })
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (search !== '') {
      async function fetchData() {
        await fetch('https://randomuser.me/api/?name='+search)
        .then(res => res.json())
        .then(data => {
          setSearch(data.results);
        })
      }
      fetchData();
    }
  }, [search]);

  const searchUsers = (event) => {
    let value = JSON.stringify(event.target.value);
    console.log(value)
  }

  if (users) {
    return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="3">
            <input
              className="form-control row-centered mt-3 mb-3 d-inline"
              type="text"
              placeholder="Search"
              name="username"
              onChange={searchUsers}
            />
          </Col>
          {/* <Col size="2">
            <button className="btn btn-success mt-3" type="submit" onClick={searchUsers}>
              Submit
            </button>
          </Col> */}
        </Row>
        <Row className="form-group border border-info rounded">
          <Col size="12">
          <table className="table table-striped text-center mb-0">
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
              {users.map((user, index) => {
                return (      
                  <tr key={index}>
                    <td><img src={user.picture.thumbnail} alt={user.name.first + user.name.last + ""}></img></td>
                    <td>{user.name.first + ' ' + user.name.last}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.date.substring(0, 10)}</td> 
                </tr> 
                )
                })}
            </tbody>
          </table>
          </Col>
        </Row>
      </Container>
    </div>
    )
  } else {
    return <h1>Unable to load data</h1>
  }
} 


export default Site;