import axios from 'axios';

function getUsers () {
return axios.get('https://randomuser.me/api/?results=30');
}

export default getUsers;