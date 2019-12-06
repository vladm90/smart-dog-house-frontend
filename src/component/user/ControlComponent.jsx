import React, {Component} from 'react';
import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'
import ApiService from "../../service/ApiService";
import houses from "../../resources/houses.png";
import Button from 'react-bootstrap-button-loader';
import RefreshIcon from '@material-ui/icons/Refresh';
import {red} from "@material-ui/core/colors";

class ControlComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insideHappy: '',
            insideSnoopy: '',
            outside: '',
            openHappy: '',
            openSnoopy: ''
        };

        this.state = {toggleHappyActive: true};
        this.state = {toggleSnoopyActive: true};

        this.onToggleHappy = this.onToggleHappy.bind(this);
        this.onToggleSnoopy = this.onToggleSnoopy.bind(this);
        this.getStats = this.getStats.bind(this);
    }

    componentDidMount() {
        this.getStats();
    }

    getStats() {

        this.setState({loading: true});
        ApiService.getStats()
            .then((res) => {

                let stats = res.data.result;
                this.setState({
                    insideHappy: stats.insideHappy,
                    insideSnoopy: stats.insideSnoopy,
                    outside: stats.outside,
                    openHappy: stats.openHappy,
                    openSnoopy: stats.openSnoopy,
                });
                if (stats.openHappy === "CLOSED") {
                    this.setState({toggleHappyActive: false})
                } else {
                    this.setState({toggleHappyActive: true})
                }
                if (stats.openSnoopy === "CLOSED") {
                    this.setState({toggleSnoopyActive: false})
                }
                else {
                    this.setState({toggleSnoopyActive: true})
                }

                this.setState({loading: false});
            }).catch(err => this.setState({loading: false}));

    }

    onToggleHappy() {
        if (this.state.toggleHappyActive) {
            ApiService.lightOff(1)
                .then(res => {
                    this.setState({message: 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        } else {
            ApiService.lightOn(1)
                .then(res => {
                    this.setState({message: 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        }
        this.setState({toggleHappyActive: !this.state.toggleHappyActive});
    }

    onToggleSnoopy() {
        // debugger;
        if (this.state.toggleSnoopyActive) {
            ApiService.lightOff(2)
                .then(res => {
                    this.setState({message: 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        } else {
            ApiService.lightOn(2)
                .then(res => {
                    this.setState({message: 'User deleted successfully.'});
                    // this.setState({users: this.state.users.filter(user => user.id !== userId)});
                })
        }
        this.setState({toggleSnoopyActive: !this.state.toggleSnoopyActive});
    }


    render() {

          window.onload = function() {

           /*   var iframe = document.getElementById("forecast_embed");

              iframe.getElementsByClassName("body").style.margin = "60px";
             // elmnt.style.display = "none";*/

            /*  var x = document.getElementById("forecast_embed");
              var y = x.contentDocument;
              y.body.style.backgroundColor = "red";
*/

          };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{margin: '10px'}}>
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
                        <Button loading={this.state.loading} size="sm" className="btn btn-warning" style={{margin: '0 0 0px 5px'}}
                                onClick={() => this.getStats()}><RefreshIcon/></Button>
                    </div>
                    <div className="col-sm" style={{margin: '10px'}}>
                        <img className="weather" alt="house" src="https://w.bookcdn.com/weather/picture/3_274069_1_1_006fe6_355_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=&anc_id=88012"/>
                        {/*https://www.booked.net/?page=weather_widget_customize&type=3&cityID=109029&cmetric=1#*/}
                    </div>
                   {/* <div className="col-sm" style={{margin: '10px'}}>

                        <li>Temperature Happy: {this.state.insideHappy}&#176;C</li>
                        <li>Temperature Snoopy: {this.state.insideSnoopy}&#176;C</li>
                        <li>Temperature Outside: {this.state.outside}&#176;C</li>
                        <li>Status Happy: {this.state.openHappy}</li>
                        <li>Status Snoopy: {this.state.openSnoopy}</li>

                    </div>*/}


                </div>
                <div className="row">
                    <div className="col-sm" style={{margin: '10px'}}>
                        <div className="houses">
                            <img alt="house" src={houses} width="100%" height="100%"/>
                            <div className="inside-happy">
                                <i>10.4&#176;C</i>
                            </div>
                            <div className="inside-snoopy">
                                <i>10.4&#176;C</i>
                            </div>
                            <div className="outside">
                                <i>10.4&#176;C</i>
                            </div>

                        </div>
                    </div>

                </div>


            </div>


        )
    }

}

export default ControlComponent;