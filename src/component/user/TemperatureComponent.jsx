import React, {Component} from 'react'
import ApiService from "../../service/ApiService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class TemperatureComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperatures: [],
            message: null,
            startDate: new Date(),
            endDate: new Date(),
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

    handleChangeStartDate = date => {
        this.setState({
            startDate: date
        });
    };

    handleChangeEndDate = date => {
        this.setState({
            endDate: date
        });
    };

    onSearch() {
        const request = {startDate: this.state.startDate, endDate: this.state.endDate};
        ApiService.getTemperaturesFiltred(request)
            .then((res) => {
                this.setState({temperatures: res.data.result})
            });
    }


    render() {
        const ExampleCustomInput = ({value, onClick}) => (
            <button className="btn btn-secondary calendar-buttons" onClick={onClick}>
                {value}
            </button>
        );
        return (


            <div border="1">

                {<div className="container">
                    <div className="row" style={{margin: '10px'}}>
                        <div className="col-sm">
                            <DatePicker
                            id='startDate'
                                selected={this.state.startDate}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="time"
                                dateFormat="d.M.yyyy H:mm"
                                customInput={<ExampleCustomInput/>}
                                onChange={this.handleChangeStartDate}
                            />
                            &nbsp;
                            <DatePicker
                            id='endDate'
                                selected={this.state.endDate}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="time"
                                dateFormat="d.M.yyyy H:mm"
                                customInput={<ExampleCustomInput/>}
                                onChange={this.handleChangeEndDate}
                            />

                            <button className="btn btn-secondary calendar-buttons" style={{margin:'0 0 0px 5px'}} onClick={() => this.onSearch()}> Search</button>

                        </div>


                    </div>
                </div>}


                <table className="table table-striped" border="1">
                    <caption className="text-center">Today</caption>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp Happy</th>
                        <th>Temp Snoopy</th>
                        <th>Outside</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.temperatures.map(
                            (temp, index) =>
                                <tr key={index}>
                                    <td>{temp.date}</td>
                                    <td className={`temperature-${temp.openHappy}`}>{temp.insideHappy}</td>
                                    <td className={`temperature-${temp.openSnoopy}`}>{temp.insideSnoopy}</td>
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