import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import getUsers from '../utils/API';

function Site() {
  const [users, setUsers] = useState([]);
  const [itemInput, setItemInput] = useState('');

  useEffect(() => {
    userData()
  }, [])

  function userData () {
    getUsers()
    .then(res => setUsers(res.data.results))
    .catch(err => console.log(err));
  }

  const handleInputChange = event => {
    const { value } = event.target;
    setItemInput(value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = itemInput;
    console.log(name)
    for (let i = 0; i < users.length; i++) {
      if (Object.values(users[i].name).includes(name)) {
        let newUser = [];
        let person = users[i];
        newUser.push(person);
        console.log(newUser);
        setUsers(newUser);
        break;
      }
    }
    

    // document.getElementById('search').addEventListener('onClick', () => {
    //   document.getElementsByTagName('input')[0].value = '';
    // });
  }

  // function clearSearch() {
  //   userData();
  // }

  if (users) {
    return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="6">
            <div className="w-50">
              <form>
                <input
                  className="search form-control row-centered mt-3 mb-2 d-inline-block"
                  type="text"
                  placeholder="Search"
                  name="ItemInput"
                  onChange={handleInputChange} value={itemInput}
                  />
                <button className="btn btn-success mb-2" type="submit" onClick={handleFormSubmit}>Submit</button>
              </form>
            </div>
          </Col>
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
  }
} 

export default Site;