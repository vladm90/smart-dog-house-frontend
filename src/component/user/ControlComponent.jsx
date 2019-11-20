import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'
import { Bootstrap2Toggle } from 'react-bootstrap-toggle';
import ApiService from "../../service/ApiService";

class ControlComponent extends Component {
      constructor(props) {
            super(props);
             this.state ={
                insideHappy: '',
                insideSnoopy: '',
                outside: '',
                openHappy: '',
                openSnoopy: '',
            }

        this.state = { toggleHappyActive: true };
        this.state = { toggleSnoopyActive: true };

        this.onToggleHappy = this.onToggleHappy.bind(this);
        this.onToggleSnoopy = this.onToggleSnoopy.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

     componentDidMount() {
            this.reloadUserList();
        }

        reloadUserList() {
            ApiService.getStats()
                .then((res) => {
                     let stats = res.data.result;
                        this.setState({
                        insideHappy: stats.insideHappy,
                        insideSnoopy: stats.insideSnoopy,
                        outside: stats.outside,
                        openHappy: stats.openHappy,
                        openSnoopy: stats.openSnoopy,
                        })
                });
          /*  const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
          this.setState({user: (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}); */
        }

    onToggleHappy() {
        // debugger;
        if (this.state.toggleHappyActive){
            ApiService.lightOff(1)
                .then(res => {
                    this.setState({message : 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        } else {
            ApiService.lightOn(1)
                .then(res => {
                    this.setState({message : 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        }
        this.setState({ toggleHappyActive: !this.state.toggleHappyActive });
    }

    onToggleSnoopy() {
        // debugger;
        if (this.state.toggleSnoopyActive){
            ApiService.lightOff(2)
                .then(res => {
                    this.setState({message : 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        } else {
            ApiService.lightOn(2)
                .then(res => {
                    this.setState({message : 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        }
        this.setState({ toggleSnoopyActive: !this.state.toggleSnoopyActive });
    }

    render() {
        return (

            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm" style={{margin:'10px'}}>
                            <Toggle
                                onClick={this.onToggleHappy}
                                on={"Happy ON"}
                                off={"Happy OFF"}
                                width={"130px"}
                                align={"center"}
                                offstyle="danger"
                                active={this.state.toggleHappyActive}
                            />
                            <i> </i>
                            <Toggle
                                onClick={this.onToggleSnoopy}
                                on={"Snoopy ON"}
                                off={"Snoopy OFF"}
                                width={"130px"}
                                align={"center"}
                                offstyle="danger"
                                active={this.state.toggleSnoopyActive}
                            />
                        </div>
                        <div className="col-sm" style={{margin:'10px'}}>
                            <li>Temperature Happy: {this.state.insideHappy}&#176;C</li>
                            <li>Temperature Snoopy: {this.state.insideSnoopy}&#176;C</li>
                            <li>Temperature Outside: {this.state.outside}&#176;C</li>
                            <li>Status Happy: {this.state.openHappy}</li>
                            <li>Status Snoopy: {this.state.openSnoopy}</li>

                        </div>

                    </div>
                </div>


            </form>

        )
    }

}

export default ControlComponent;