import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import getUsers from '../utils/API';
import '../index.css';

const Site = () => {
  const [itemInput, setItemInput] = useState('');
  const [users, setUsers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    getUsers()
    .then(res => setUsers(res.data.results))
    .catch(err => console.log(err));
  }, [])
  
  useEffect(() => {
    const name = itemInput;
    
    for (let i = 0; i < users.length; i++) {
      if (Object.values(users[i].name).includes(name)) {
        let newUser = [];
        let person = users[i];
        newUser.push(person);
        setUsers(newUser);
        break;
      }
    }
  }, [itemInput])

  useEffect(() => {
      document.getElementById('sort-name').addEventListener('click', () => {
        setUsers(users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1))
      })
  }, [users])

  const resetNames = (e) => {
    e.preventDefault();
    window.location.reload();
  }
  
  return (
  <div>
    <Jumbotron />
    <Container>
      <Row>
        <Col size="6">
          <div className="d-inline-block">
            <form className="search d-inline-block search-form me-4">
              <input
                id="search-box"
                className="form-control row-centered mt-3 mb-2 d-inline-block"
                type="text"
                placeholder="Search"
                name="ItemInput"
                onChange={event => setItemInput(event.target.value)} 
                value={itemInput}
                />
            </form>
            <button className="d-inline-block btn btn-success me-4 my-button" onClick={resetNames}>Reset</button>
          </div>
        </Col>
      </Row>
      <Row className="form-group my-border rounded mb-5">
        <Col size="12">
        <table className="table table-striped text-center mb-0">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col"><button id="sort-name" className="table-btn">Name</button></th>
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
} 

export default Site;