import axios from 'axios';

const USER_API_BASE_URL = 'http://89.137.31.47:8080/api';

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