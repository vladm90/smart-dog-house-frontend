import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
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
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div border="1">



                <table className="table table-striped" border="1">
                    <caption className="text-center">Today</caption>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Temperature Sensor 1</th>
                            <th>Temperature Sensor 2</th>
                            <th>Status releu 1</th>
                            <th>Status releu 2</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.date}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>

                                       {/* <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>*/}
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        );
    }

}

export default ListUserComponent;