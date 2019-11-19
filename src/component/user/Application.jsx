import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class Application extends Component {

    constructor(props) {
        super(props)
       /* this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);*/
    }

   /* componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }*/

    render() {
        return (
            <div>
                {this.props.children}
             </div>

        );
    }

}

export default Application;
