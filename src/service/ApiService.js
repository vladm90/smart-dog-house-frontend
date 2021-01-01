import axios from 'axios';

const USER_API_BASE_URL = 'http://95.77.31.135:8081/api';
//const USER_API_BASE_URL = 'http://localhost:8080/api';

class ApiService {

    getTemperatures() {
        return axios.get(USER_API_BASE_URL + '/temperatures');
    }

    getTemperaturesFiltred(request) {
        return axios.post(USER_API_BASE_URL + '/temperatures', request);
    }

    getStats() {
        return axios.get(USER_API_BASE_URL + '/stats');
    }

    getImages() {
        return axios.get(USER_API_BASE_URL + '/images');
    }

    lightOn(relayId) {
        return axios.get(USER_API_BASE_URL + '/relay/' + relayId + '/on');
    }

    lightOff(relayId) {
       return axios.get(USER_API_BASE_URL + '/relay/' + relayId + '/off');
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