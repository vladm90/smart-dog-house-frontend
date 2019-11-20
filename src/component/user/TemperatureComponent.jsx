import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class TemperatureComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperatures: [],
            message: null,
            startDate: new Date()
        };

        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();

    }

    reloadUserList() {
        ApiService.getTemperatures()
            .then((res) => {
                this.setState({temperatures: res.data.result})
            });
      /*  const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      this.setState({user: (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}); */
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
 reloadUserList2() {
            ApiService.getStats()
                .then((res) => {

                });
          /*  const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
          this.setState({user: (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}); */
        }
    render() {
 const ExampleCustomInput = ({ value, onClick }) => (
                        <button className="example-custom-input" onClick={onClick}>
                          {value}
                        </button>
                      );
        return (


            <div border="1">

                {<div className="container">
                    <div className="row" style={{margin:'10px'}}>
                        <div className="col-sm">

                            <DatePicker
                                selected={this.state.startDate}
                                showTimeSelect
                                timeFormat="HH"
                                timeIntervals={60}
                                timeCaption="time"
                                dateFormat="d.M.yyyy H:mm"
                                customInput={<ExampleCustomInput />}
                                onChange={this.handleChange}
                               />
                        </div>
                        <div className="col-sm">

                            <DatePicker
                                selected={this.state.startDate}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="time"
                                dateFormat="d.M.yyyy H:mm"
                                onChange={this.handleChange}/>
                        </div>
                        <div className="col-lg">
                            <button onClick={this.reloadUserList2}>Search</button>
                        </div>
                       {/* <div className="col-sm">

                        </div>*/}

                    </div>
                </div>}


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
                        this.state.temperatures.map(
                            temp =>
                                <tr key={temp.id}>
                                    <td>{temp.date}</td>
                                    <td>{temp.insideHappy}</td>
                                    <td>{temp.insideSnoopy}</td>
                                    <td>{temp.outside}</td>
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