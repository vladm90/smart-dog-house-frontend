import axios from 'axios';

const USER_API_BASE_URL = 'http://82.76.176.61:8080/api';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL + '/temperatures');
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL + '/test', user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();