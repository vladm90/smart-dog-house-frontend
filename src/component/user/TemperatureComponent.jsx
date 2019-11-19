import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
class TemperatureComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }

        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
      /*  const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      this.setState({user: (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}); */
    }

    render() {
        return (


            <div border="1">
                <table className="table table-striped" border="1">
                    <caption className="text-center">Today</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>TH</th>
                            <th>TS</th>
                            <th>Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.date}</td>
                                        <td>{user.insideHappy}</td>
                                        <td>{user.insideSnoopy}</td>
                                        <td>{user.outside}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        );
    }

}

export default TemperatureComponent;