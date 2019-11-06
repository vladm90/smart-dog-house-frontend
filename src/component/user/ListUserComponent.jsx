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
        this.lightOn = this.lightOn.bind(this);
        this.lightOff = this.lightOff.bind(this);
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
        this.props.history.push('/api/test');
    }

    lightOn(){
               ApiService.lightOn()
               .then(res => {
                   this.setState({message : 'User deleted successfully.'});
                  // this.setState({users: this.state.users.filter(user => user.id !== userId)});
               })

    }

    lightOff(){
               ApiService.lightOff()
               .then(res => {
                   this.setState({message : 'User deleted successfully.'});
                  // this.setState({users: this.state.users.filter(user => user.id !== userId)});
               })

    }

    render() {
        return (


            <div border="1">
<button className="btn btn-primary" style={{margin:'10px'}} onClick={() => this.lightOn()}> ON</button>
                                                                      <button className="btn btn-warning" style={{margin:'10px'}} onClick={() => this.lightOff()}> OFF</button>
                                                                      <button className="btn btn-info" style={{margin:'10px'}} onClick={() => this.addUser()}> Start Heat</button>


                <table className="table table-striped" border="1">
                    <caption className="text-center">Today</caption>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>TempH</th>
                            <th>TempS</th>
                            <th>Outside</th>
                            <th>StatusH</th>
                            <th>StatusS</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.date}</td>

                                        <td>{user.insideHappy}</td>
                                        <td>{user.insideSnoopy}</td>
                                        <td>{user.outside}</td>
                                        <td><button className="btn btn-primary" >ON</button></td>
                                        <td>
                                          <button className="btn btn-warning" >OFF</button>
                                          </td>


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